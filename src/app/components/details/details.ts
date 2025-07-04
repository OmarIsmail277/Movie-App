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

  movie: any = null;

  constructor() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.cardService.getMovieDetails(id).subscribe((movie) => {
        this.movie = movie;
      });
    });
  }

  get genreNames(): string {
    return this.movie?.genres
      ? this.movie.genres.map((g: any) => g.name).join(', ')
      : 'N/A';
  }

  get languageNames(): string {
    return this.movie?.spoken_languages
      ? this.movie.spoken_languages.map((l: any) => l.english_name).join(', ')
      : 'N/A';
  }

  get companyNames(): string {
    return this.movie?.production_companies
      ? this.movie.production_companies.map((c: any) => c.name).join(', ')
      : 'N/A';
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
