import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { BaseTaskComponent } from '../base-task/base-task.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent extends BaseTaskComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { 
    super();
  }

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id'); 
    this.fetchTaskDetails(taskId); 
  }

  fetchTaskDetails(taskId: string | null) {
    const tasks = [
      { id: 1, title: 'Task 1', description: 'Description 1', category: 'Work', status: 'Pending', deadline: "12.05.25" },
      { id: 2, title: 'Task 2', description: 'Description 2', category: 'Personal', status: 'Pending', deadline: "12.06.26" }
    ];

    const task = tasks.find(t => t.id === Number(taskId));
    if (task) {
      this.title = task.title;
      this.description = task.description;
      this.category = task.category;
      this.status = task.status;
      this.deadline = task.deadline;
    }
  }

  goBack() {
    this.router.navigate(['/']); 
  }
}