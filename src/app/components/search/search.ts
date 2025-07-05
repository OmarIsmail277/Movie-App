import { Component, inject, Input } from '@angular/core';
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
  @Input() activeTabValue: number = 0;
  private router = inject(Router);
  searchQuery: string = '';

  search() {
    if (this.searchQuery.trim()) {
      const mediaType = this.activeTabValue === 0 ? 'movie' : 'tv';
      this.router.navigate(['/search'], {
        queryParams: { query: this.searchQuery, type: mediaType },
      });
    }
  }

  get placeholderText(): string {
    return this.activeTabValue === 0
      ? 'Search for movies'
      : 'Search for TV shows';
  }
}
