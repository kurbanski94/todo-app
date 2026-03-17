import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: Task[] = [
    { id: '1', title: 'Kup mleko', completed: false, userId: 1 },
    { id: '2', title: 'Zadzwonić do Ani', completed: true, userId: 1 },
    { id: '3', title: 'Przygotować prezentację', completed: false, userId: 2 },
    { id: '4', title: 'Naprawić rower', completed: false, userId: 2 },
    {
      id: '5',
      title: 'Przeczytać rozdział książki',
      completed: true,
      userId: 3,
    },
  ];
}
