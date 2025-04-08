import { Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

export const routes: Routes = [
  { path: '', component: CompaniesComponent, pathMatch: 'full' },
  { path: 'companies/:id', component: CompanyDetailComponent }
];