import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { CardService } from '../../services/card.service';
import { CommonModule } from '@angular/common';
import { Recommendations } from '../recommendations/recommendations';

@Component({
  selector: 'app-details',
  imports: [CommonModule, Recommendations],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  private route = inject(ActivatedRoute);
  public movieId = this.route.snapshot.paramMap.get('id');
  private cardService = inject(CardService);

  item: any = null;
  mediaType: string = 'movie';

  constructor() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.mediaType = params['type'] || 'movie';

      if (this.mediaType === 'movie') {
        this.cardService.getMovieDetails(id).subscribe((movie) => {
          this.item = movie;
        });
      } else {
        this.cardService.getTVShowsDetails(id).subscribe((show) => {
          // Transform TV show data to match expected structure
          this.item = {
            ...show,
            title: show.name,
            release_date: show.first_air_date,
            runtime: show.episode_run_time?.[0] || 'N/A',
          };
        });
      }
    });
  }

  get genreNames(): string {
    return this.item?.genres
      ? this.item.genres.map((g: any) => g.name).join(', ')
      : 'N/A';
  }

  get languageNames(): string {
    return this.item?.spoken_languages
      ? this.item.spoken_languages.map((l: any) => l.english_name).join(', ')
      : 'N/A';
  }

  get companyNames(): string {
    return this.item?.production_companies
      ? this.item.production_companies.map((c: any) => c.name).join(', ')
      : 'N/A';
  }

  getStars(): string[] {
    const rating = this.item.vote_average || 0;
    const maxStars = 5;
    const filledStars = Math.round(rating / 2); // Convert 10-point scale to 5-point scale

    const stars: string[] = [];
    for (let i = 0; i < maxStars; i++) {
      stars.push(i < filledStars ? 'filled' : 'empty');
    }

    return stars;
  }

  get durationText(): string {
    if (this.mediaType === 'movie') {
      return this.item?.runtime ? `${this.item.runtime} min` : 'N/A';
    } else {
      return this.item?.runtime
        ? `${this.item.runtime} min per episode`
        : 'N/A';
    }
  }
}
