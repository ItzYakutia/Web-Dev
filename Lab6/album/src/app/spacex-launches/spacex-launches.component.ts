import { Component, Injectable, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LaunchFilterComponent } from '../launch-filter/launch-filter.component';
import { CommonModule } from '@angular/common';

interface Launch {
  mission_name: string,
  launch_success: boolean,
  launch_date: string,
  rocket_name: string
}

@Component({
  selector: 'app-spacex-launches',
  standalone: true,
  imports: [LaunchFilterComponent, CommonModule],
  templateUrl: './spacex-launches.component.html',
  styleUrl: './spacex-launches.component.css'
})

@Injectable({
  providedIn: 'root',
})

export class SpacexLaunchesComponent implements OnInit{
  launches: Launch[] = [];
  filteredLaunches: Launch[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchLaunches();
  }

  fetchLaunches(): void {
    this.http.get<Launch[]>('https://api.spacexdata.com/v3/launches/')
    .subscribe(data => {
      this.launches = data;
      this.filteredLaunches = data;
    })};

  filterLaunches(): void{
    this.filteredLaunches = this.launches.filter(launch => launch.launch_success);
  }
}
