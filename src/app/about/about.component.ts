import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="screen">
      <h2>O aplikacji</h2>
      <p>Krótki opis aplikacji. (Placeholder)</p>
    </section>
  `,
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {}
