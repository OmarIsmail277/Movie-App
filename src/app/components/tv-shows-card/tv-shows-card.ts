import { CommonModule } from '@angular/common';
import { Component, computed, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { KnobModule } from 'primeng/knob';
import { PaginatorModule } from 'primeng/paginator';
import { WatchlistStore } from '../../store/watchlist.store';

@Component({
  selector: 'app-tv-shows-card',
  imports: [
    CommonModule,
    KnobModule,
    FormsModule,
    PaginatorModule,
    RouterModule,
  ],
  templateUrl: './tv-shows-card.html',
  styleUrl: './tv-shows-card.scss',
})
export class TvShowsCard {
  @Input() show: any;

  public badMovieIds = [93405];

  private watchlistStore = inject(WatchlistStore);

  toggleWatchList() {
    this.watchlistStore.toggleWatchList(this.show);
  }

  readonly isInWatchList = computed(() =>
    this.watchlistStore.movies().some((m) => m.id === this.show.id)
  );

  get votePercent(): number {
    return Math.round(this.show.vote_average * 10);
  }

  get knobColor(): string {
    return this.votePercent <= 70 ? '#bbbd2c' : '#21d07a'; // yellow or green
  }

  shouldHide(show: any): boolean {
    return this.badMovieIds.includes(show.id);
  }

  getSafeTitle(show: any): string {
    return this.shouldHide(show)
      ? '❗ Title hidden due to inappropriate images or show name 🚫⛔'
      : show.title;
  }
}
