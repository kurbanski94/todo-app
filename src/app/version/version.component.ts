import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-version',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="screen">
      <h2>Wersja</h2>
      <p>Informacje o wersji aplikacji. (Placeholder)</p>
    </section>
  `,
  styleUrls: ['./version.component.css'],
})
export class VersionComponent {}
