import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-search',
  imports: [InputTextModule, ButtonModule, FormsModule, RouterModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  private router = inject(Router);
  searchQuery: string = '';

  search() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], {
        queryParams: { query: this.searchQuery },
      });
    }
  }
}
