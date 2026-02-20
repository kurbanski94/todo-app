import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="screen screen--progress">
      <h2>Postęp</h2>
      <p>Tu będzie widok Postęp (pusty ekran na razie).</p>
    </section>
  `,
})
export class ProgressComponent {}
