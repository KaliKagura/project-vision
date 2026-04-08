import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <section class="page hero">
      <p class="eyebrow">Inicio</p>
      <h1>Construimos una presencia digital clara y directa.</h1>
      <p>
        Este proyecto ya tiene rutas base para navegar entre páginas y servir como
        punto de partida para una landing moderna en Angular.
      </p>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    .page {
      color: #f5f7fb;
      margin: 0 auto;
      max-width: 72rem;
      padding: 4rem 1.5rem;
    }

    .hero {
      min-height: calc(100dvh - 4.5rem);
      display: grid;
      align-content: center;
    }

    .eyebrow {
      color: #8ab4ff;
      font-size: 0.875rem;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    h1 {
      font-size: clamp(2.8rem, 6vw, 5.4rem);
      line-height: 0.95;
      margin: 1rem 0;
      max-width: 12ch;
    }

    p {
      color: rgba(245, 247, 251, 0.78);
      font-size: 1.05rem;
      max-width: 58ch;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
