import { Component, inject } from '@angular/core';
import { WatchlistStore } from '../../store/watchlist.store';
import { WatchlistCard } from '../watchlist-card/watchlist-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-watchlist',
  imports: [WatchlistCard, CommonModule],
  templateUrl: './watchlist.html',
  styleUrl: './watchlist.scss',
})
export class Watchlist {
  private watchlistStore = inject(WatchlistStore);
  protected watchlist = this.watchlistStore.movies; // signal <Movies[]>
}
