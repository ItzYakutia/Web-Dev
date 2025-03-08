import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-task',
  standalone: true,
  template: '' 
})
export class BaseTaskComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() category: string = '';
  @Input() status: string = 'Pending';
  @Input() deadline: string = '';
}