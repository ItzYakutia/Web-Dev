import { Component, Output, EventEmitter } from '@angular/core';
import { BaseTaskComponent } from '../base-task/base-task.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent extends BaseTaskComponent {
  @Output() taskCompleted = new EventEmitter<void>();
  @Output() taskClicked = new EventEmitter<void>(); 
  markAsCompleted(event: Event) { 
    event.stopPropagation(); 
    this.status = 'Completed';
    this.taskCompleted.emit();
  }
  onTaskClick() {
    this.taskClicked.emit(); 
  }
}