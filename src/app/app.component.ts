import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { InboxScreenComponent } from './components/inbox-screen/inbox-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InboxScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-v17-vite-storybook';
}
