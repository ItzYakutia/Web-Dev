import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SpacexLaunchesComponent } from "./spacex-launches/spacex-launches.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, SpacexLaunchesComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css',
})
export class AppComponent {}