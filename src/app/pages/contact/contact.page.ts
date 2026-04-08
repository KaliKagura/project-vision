import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  template: `
    <section class="page">
      <p class="eyebrow">Contacto</p>
      <h1>Lista la ruta para conectar un formulario o WhatsApp.</h1>
      <p>
        Esta pantalla ya existe como destino de navegación. Desde aquí puedes
        agregar un formulario reactivo o una tarjeta de contacto real.
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

    .eyebrow {
      color: #8ab4ff;
      font-size: 0.875rem;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    h1 {
      font-size: clamp(2rem, 4vw, 3.5rem);
      margin: 0.75rem 0 1rem;
      max-width: 14ch;
    }

    p {
      color: rgba(245, 247, 251, 0.78);
      max-width: 58ch;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {}
