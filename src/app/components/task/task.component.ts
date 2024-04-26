import { Component, EventEmitter, Input, Output } from '@angular/core';

import type { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  /**
   * The shape of the task object
   */
  @Input() task?: TaskModel;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<string>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<string>();

  /**
   * @ignore
   * Component method to trigger the onPin event
   * @param id string
   */
  onPin(id: string) {
    this.onPinTask.emit(id);
  }
  /**
   * @ignore
   * Component method to trigger the onArchive event
   * @param id string
   */
  onArchive(id: string) {
    this.onArchiveTask.emit(id);
  }
}
