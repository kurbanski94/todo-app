import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="screen screen--kanban">
      <h2>Kanban</h2>
      <p>Tu będzie widok Kanban (pusty ekran na razie).</p>
    </section>
  `,
  styleUrls: ['./kanban.component.css'],
})
export class KanbanComponent {}
