import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { WindowMaximizeIcon } from 'primeng/icons/windowmaximize';
import { MessageModule } from 'primeng/message';
import { CardService } from '../../services/card.service';
import { CommonModule } from '@angular/common';
import { MovieCard } from '../movie-card/movie-card';
import { Navbar } from '../navbar/navbar';
import { Search } from '../search/search';
import { PaginatorModule } from 'primeng/paginator';
import { Hero } from '../hero/hero';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-home',
  imports: [
    ButtonModule,
    WindowMaximizeIcon,
    RouterOutlet,
    MessageModule,
    CommonModule,
    MovieCard,
    Navbar,
    Search,
    PaginatorModule,
    Hero,
    TabsModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
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

  // get movies() {
  //   return this.cardService.movies(); // reactive signal read
  // }
}
