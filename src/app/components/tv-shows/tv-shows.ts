import { Component, inject, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { MovieCard } from '../movie-card/movie-card';
import { CommonModule } from '@angular/common';
import { Paginator } from 'primeng/paginator';
import { TvShowsCard } from '../tv-shows-card/tv-shows-card';

@Component({
  selector: 'app-tv-shows',
  imports: [TvShowsCard, CommonModule, Paginator],
  templateUrl: './tv-shows.html',
  styleUrl: './tv-shows.scss',
})
export class TvShows implements OnInit {
  private tvShowsService = inject(CardService);
  protected shows = this.tvShowsService.shows;

  // Pagination properties
  protected currentPage: number = 1;
  protected totalRecords: number = 200; // 10 pages * 20 movies per page
  protected rows: number = 20; // movies per page
  protected maxPages: number = 10; // limit to 10 pages as requested

  ngOnInit() {
    this.tvShowsService.getTVShows(this.currentPage);
  }

  onPageChange(event: any) {
    this.currentPage = event.page + 1;
    this.tvShowsService.getTVShows(this.currentPage);
  }
}
