import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-watchlist-card',
  imports: [CommonModule, KnobModule, FormsModule, RouterModule],
  templateUrl: './watchlist-card.html',
  styleUrl: './watchlist-card.scss',
})
export class WatchlistCard {
  @Input() movie: any;
  public badMovieIds = [
    1477388, 1337411, 1407861, 1234821, 1137350, 1426776, 568770, 541671,
    1450599, 1239193, 757725, 1097311, 1477114, 1476292, 1397832, 1428264,
    1136867, 1001414, 1318856, 1059128, 101, 1078600, 9603, 1112466, 4348, 194,
    1018, 539, 9919, 1485328, 1461714, 1389255, 1000837, 959604, 793058,
    1109255, 1155281, 1103857, 901121, 10802, 2108, 1140847, 1064307, 845111,
    933490, 1228681, 1275248, 1124619, 164, 1415211, 1476450, 1327766, 1290182,
    1128505, 927547, 845783, 1018634, 11075,
  ];

  get votePercent(): number {
    return Math.round(this.movie.vote_average * 10);
  }

  get knobColor(): string {
    return this.votePercent <= 70 ? '#bbbd2c' : '#21d07a';
  }

  shouldHide(movie: any): boolean {
    return this.badMovieIds.includes(movie.id);
  }

  getSafeTitle(movie: any): string {
    return this.shouldHide(movie)
      ? '❗ Title hidden due to inappropriate images or movie name 🚫⛔'
      : movie.title;
  }

  getStars(): string[] {
    const rating = this.movie.vote_average || 0;
    const maxStars = 5;
    const filledStars = Math.round(rating / 2); // Convert 10-point scale to 5-point scale

    const stars: string[] = [];
    for (let i = 0; i < maxStars; i++) {
      stars.push(i < filledStars ? 'filled' : 'empty');
    }

    return stars;
  }
}
