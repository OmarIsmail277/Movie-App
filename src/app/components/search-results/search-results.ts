import { Component, Inject, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card.service';
import { MovieCard } from '../movie-card/movie-card';
import { CommonModule } from '@angular/common';
import { Search } from '../search/search';
import { TvShowsCard } from '../tv-shows-card/tv-shows-card';

@Component({
  selector: 'app-search-results',
  imports: [MovieCard, CommonModule, Search, TvShowsCard],
  templateUrl: './search-results.html',
  styleUrl: './search-results.scss',
})
export class SearchResults {
  private route = inject(ActivatedRoute);
  private cardService = inject(CardService);

  results = signal<any[]>([]);
  query = '';
  mediaType = 'movie';

  ngOnInit() {
    // Subscribe to queryParamMap to react to changes in the query parameter
    this.route.queryParamMap.subscribe((params) => {
      this.query = params.get('query') || '';
      this.mediaType = params.get('type') || 'movie';

      if (this.query) {
        if (this.mediaType === 'movie') {
          this.cardService.searchMovies(this.query).subscribe((res) => {
            this.results.set(res.results);
          });
        } else {
          this.cardService.searchTVShows(this.query).subscribe((res) => {
            this.results.set(res.results);
          });
        }
      } else {
        this.results.set([]);
      }
    });
  }
}
