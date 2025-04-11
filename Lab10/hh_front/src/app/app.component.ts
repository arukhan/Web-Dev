import { Component, OnInit } from '@angular/core';
import { CompaniesService } from './services/companies.service';
import { CommonModule } from '@angular/common';
import { Company } from './models/company';
import { Vacancy } from './models/vacancy';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,   
  imports: [CommonModule, FormsModule],  
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  companies: Company[] = [];
  selectedVacancies: Vacancy[] = [];
  searchTerm: string = '';
  sortAsc: boolean = true;

  constructor(private companyService: CompaniesService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  onCompanyClick(companyId: number): void {
    this.companyService.getVacanciesByCompany(companyId).subscribe(data => {
      this.selectedVacancies = data;
    });
  }

  toggleSort(): void {
    this.sortAsc = !this.sortAsc;
  }

  filteredCompanies(): Company[] {
    let filtered = this.companies.filter(company =>
      company.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    return filtered.sort((a, b) => {
      return this.sortAsc
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
  }
}
