import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-services-page',
  template: `
    <section class="page">
      <p class="eyebrow">Servicios</p>
      <h1>Secciones separadas por ruta.</h1>

      <div class="cards">
        <article>
          <h2>Landing</h2>
          <p>Pantallas principales con navegación limpia y contenido enfocado.</p>
        </article>
        <article>
          <h2>Escalabilidad</h2>
          <p>Lazy loading por página para mantener el arranque ligero.</p>
        </article>
        <article>
          <h2>Angular</h2>
          <p>Componentes standalone y rutas declarativas con loadComponent.</p>
        </article>
      </div>
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

    .eyebrow {
      color: #8ab4ff;
      font-size: 0.875rem;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    h1 {
      font-size: clamp(2rem, 4vw, 3.5rem);
      margin: 0.75rem 0 2rem;
    }

    .cards {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }

    article {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 1.25rem;
      padding: 1.25rem;
    }

    h2 {
      margin: 0 0 0.5rem;
    }

    p {
      color: rgba(245, 247, 251, 0.78);
      margin: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesPage {}
