import { Component, EventEmitter, Input, Output } from '@angular/core';

import type { ITask } from '../../models/task.model';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  /**
   * @ignore
   * Component property to define ordering of tasks
   * */
  tasksInOrder: ITask[] = [];

  /** Checks if it is in loading state */
  @Input() loading = false;

  /**
   * Event to change the task to pinned
   * */
  @Output() onPinTask = new EventEmitter<Event>();

  /**
   * Event to change the task to archived
   * */
  @Output() onArchiveTask = new EventEmitter<Event>();

  /** The list of tasks */
  @Input() set tasks(arr: ITask[]) {
    const pinnedTasks = arr.filter((task) => task.state === 'TASK_PINNED');
    const filteredTasks = arr.filter(
      (task) => task.state !== 'TASK_ARCHIVED' && task.state !== 'TASK_PINNED'
    );
    this.tasksInOrder = [...pinnedTasks, ...filteredTasks];
  }
}
