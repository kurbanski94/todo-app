import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="screen">
      <h2>Jak działa</h2>
      <p>Informacje jak używać aplikacji. (Placeholder)</p>
    </section>
  `,
  styleUrls: ['./help.component.css'],
})
export class HelpComponent {}
