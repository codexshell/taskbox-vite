import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { TaskState } from '../../state/task.state';
import { InboxScreenPureComponent } from '../inbox-screen-pure/inbox-screen-pure.component';

@Component({
  selector: 'app-inbox-screen',
  standalone: true,
  imports: [InboxScreenPureComponent],
  templateUrl: './inbox-screen.component.html',
  styleUrl: './inbox-screen.component.css',
})
export class InboxScreenComponent {
  private store = inject(Store);
  error = this.store.selectSignal(TaskState.getError)();
}
