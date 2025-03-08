import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskListComponent, NgIf],
  template: `
    <router-outlet></router-outlet>
    <app-task-list *ngIf="!router.url.includes('task')"></app-task-list>
  `,
})
export class AppComponent {
  constructor(public router: Router) {}
}