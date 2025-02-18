import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { HeadingComponent } from './heading/heading.component';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductsComponent, HeadingComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop-app';
}
