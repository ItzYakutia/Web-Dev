import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'companies.component.html',
  styleUrl: 'companies.component.css',
})
export class CompaniesComponent {
  companies: Company[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  constructor(private companyService: CompanyService) {
    this.loadCompanies();
  }

  loadCompanies() {
    this.companyService.getCompanies().subscribe({
      next: (data) => {
        this.companies = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load companies';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}