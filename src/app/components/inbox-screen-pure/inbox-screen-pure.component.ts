import { Component, Input } from '@angular/core';

import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-inbox-screen-pure',
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: './inbox-screen-pure.component.html',
  styleUrl: './inbox-screen-pure.component.css',
})
export class InboxScreenPureComponent {
  @Input() error?: boolean;
}
