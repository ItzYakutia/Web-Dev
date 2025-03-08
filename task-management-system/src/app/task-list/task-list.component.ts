import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { TaskItemComponent } from '../task-item/task-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, NgFor], 
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [
    { id: 1, title: 'Task 1', description: 'Need for my job', category: 'Work', status: 'Pending', deadline: "18.03.25 6pm" },
    { id: 2, title: 'Task 2', description: 'Description 2', category: 'Personal', status: 'Pending', deadline: "18.03.25 6pm" }
  ];

  onTaskCompleted(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.status = 'Completed';
    }
  }

  constructor(private router: Router) {} 

  onTaskClicked(taskId: number) {
    this.router.navigate(['/task', taskId]); 
  }
}