import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="screen">
      <h2>Reset danych</h2>
      <p>Strona do resetowania danych. (Placeholder)</p>
    </section>
  `,
  styleUrls: ['./reset.component.css'],
})
export class ResetComponent {}
