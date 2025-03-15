import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-launch-filter',
  standalone: true,
  templateUrl: './launch-filter.component.html',
  styleUrl: './launch-filter.component.css'
})
export class LaunchFilterComponent {
  @Output() filterSuccess = new EventEmitter <void>();

  filter(): void{
    this.filterSuccess.emit();
  }
}
