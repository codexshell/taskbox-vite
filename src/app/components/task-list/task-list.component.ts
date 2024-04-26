import type { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';

import * as TaskActions from '../../state/task.actions';
import { TaskListPureComponent } from '../task-list-pure/task-list-pure.component';
import { TaskState } from '../../state/task.state';
import type { TaskModel } from '../../models/task.model';
import type { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskListPureComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  private store = inject(Store);
  // Task slice from the global store
  tasks$: Observable<TaskModel[]> = this.store.select(TaskState.getAllTasks);

  /**
   *  Component method to trigger the archiveTask event.
   * */
  archiveTask(id: string) {
    this.store.dispatch(new TaskActions.ArchiveTask(id));
  }

  /**
   * Component action to trigger the pinTask event.
   * */
  pinTask(id: string) {
    this.store.dispatch(new TaskActions.PinTask(id));
  }
}
