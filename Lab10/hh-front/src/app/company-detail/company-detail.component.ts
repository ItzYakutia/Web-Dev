import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Company } from '../models/company';
import { Vacancy } from '../models/vacancy';
import { CompanyService } from '../services/company.service';
import { VacancyService } from '../services/vacancy.service';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'company-detail.component.html',
  styleUrl: 'company-detail.component.css',
})
export class CompanyDetailComponent implements OnInit {
  company: Company | null = null;
  vacancies: Vacancy[] = [];
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get('id');
    
    if (companyId) {
      this.loadCompany(Number(companyId));
    } else {
      this.errorMessage = 'Invalid company ID';
    }
  }

  private loadCompany(id: number): void {
    this.companyService.getCompany(id).subscribe({
      next: (company) => {
        this.company = company;
        this.loadVacancies(id);
      },
      error: (err) => {
        this.errorMessage = 'Failed to load company details';
        console.error(err);
      }
    });
  }

  private loadVacancies(companyId: number): void {
    this.vacancyService.getCompanyVacancies(companyId).subscribe({
      next: (vacancies) => this.vacancies = vacancies,
      error: (err) => {
        console.error('Failed to load vacancies:', err);
        this.vacancies = [];
      }
    });
  }
}