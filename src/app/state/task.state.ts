import { Injectable } from '@angular/core';
import { Action, Selector, State } from '@ngxs/store';
import type { StateContext } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';

import type { TaskModel } from '../models/task.model';
import * as TaskActions from './task.actions';

// The initial state of our store when the app loads.
// Usually you would fetch this from a server.
const defaultTasks: TaskModel[] = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

export interface TaskStateModel {
  tasks: TaskModel[];
  status: 'idle' | 'loading' | 'success' | 'error';
  error: boolean;
}

// Set the default state
@State<TaskStateModel>({
  name: 'taskbox',
  defaults: {
    tasks: defaultTasks,
    status: 'idle',
    error: false,
  },
})
@Injectable()
export class TaskState {
  // Defines a new selector for the error field
  @Selector()
  static getError(state: TaskStateModel): boolean {
    return state.error;
  }

  @Selector()
  static getAllTasks(state: TaskStateModel): TaskModel[] {
    return state.tasks;
  }

  // Triggers the PinTask action, similar to redux
  @Action(TaskActions.PinTask)
  pinTask(
    { getState, patchState, setState }: StateContext<TaskStateModel>,
    { payload }: TaskActions.PinTask
  ) {
    const task = getState().tasks.find((t) => t.id === payload);

    if (task) {
      setState(
        patch({
          tasks: updateItem<TaskModel>(
            (t) => t.id === payload,
            patch({ state: 'TASK_PINNED' })
          ),
        })
      );
    }
  }

  // Triggers the ArchiveTask action, similar to redux
  @Action(TaskActions.ArchiveTask)
  archiveTask(
    { getState, setState }: StateContext<TaskStateModel>,
    { payload }: TaskActions.ArchiveTask
  ) {
    const task = getState().tasks.find((t) => t.id === payload);

    if (task) {
      setState(
        patch({
          tasks: updateItem<TaskModel>(
            (t) => t.id === payload,
            patch({
              state: 'TASK_ARCHIVED',
            })
          ),
        })
      );
    }
  }

  @Action(TaskActions.AppError)
  setAppError(
    { getState, patchState }: StateContext<TaskStateModel>,
    { payload }: TaskActions.AppError
  ) {
    const state = getState();
    patchState({
      error: !state.error,
    });
  }
}
