import { Component, inject } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card';
import { Paginator } from 'primeng/paginator';
import { CardService } from '../../services/card.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  imports: [MovieCard, Paginator, CommonModule],
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
})
export class Movies {
  private movieService = inject(CardService);
  protected movies = this.movieService.movies;

  // Pagination properties
  protected currentPage: number = 1;
  protected totalRecords: number = 200; // 10 pages * 20 movies per page
  protected rows: number = 20; // movies per page
  protected maxPages: number = 10; // limit to 10 pages as requested

  ngOnInit() {
    this.movieService.getMovies(this.currentPage); // trigger the fetch with page 1
  }

  onPageChange(event: any) {
    this.currentPage = event.page + 1; // PrimeNG uses 0-based indexing
    this.movieService.getMovies(this.currentPage);
  }
}
