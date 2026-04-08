import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet],
  template: `
    <p-navbar />
    <main class="app-shell">
      <router-outlet />
    </main>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100dvh;
    }

    .app-shell {
      min-height: calc(100dvh - 4.5rem);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}

