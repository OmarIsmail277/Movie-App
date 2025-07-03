import { Component, Inject, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card.service';
import { MovieCard } from '../movie-card/movie-card';
import { CommonModule } from '@angular/common';
import { Search } from '../search/search';

@Component({
  selector: 'app-search-results',
  imports: [MovieCard, CommonModule, Search],
  templateUrl: './search-results.html',
  styleUrl: './search-results.scss',
})
export class SearchResults {
  private route = inject(ActivatedRoute);
  private cardService = inject(CardService);

  movies = signal<any[]>([]);
  query = '';

  ngOnInit() {
    // Subscribe to queryParamMap to react to changes in the query parameter
    this.route.queryParamMap.subscribe((params) => {
      this.query = params.get('query') || '';
      if (this.query) {
        this.cardService.searchMovies(this.query).subscribe((res) => {
          this.movies.set(res.results);
        });
      } else {
        this.movies.set([]);
      }
    });
  }
}
