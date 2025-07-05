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
import { Movies } from '../movies/movies';
import { TvShows } from '../tv-shows/tv-shows';

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
    Movies,
    TvShows,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  activeTabValue = 0; // 0 for movies, 1 for TV shows

  onTabChange(event: any) {
    this.activeTabValue = event;
    console.log('Tab changed to:', this.activeTabValue);
  }

  // get movies() {
  //   return this.cardService.movies(); // reactive signal read
  // }
}
