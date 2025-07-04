import { Component, inject, signal } from '@angular/core';
import { CardService } from '../../services/card.service';
import { ActivatedRoute } from '@angular/router';
import { MovieCard } from '../movie-card/movie-card';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-recommendations',
  imports: [MovieCard, CommonModule, CarouselModule],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.scss',
})
export class Recommendations {
  private movieService = inject(CardService);
  private route = inject(ActivatedRoute);
  public movieId = this.route.snapshot.paramMap.get('id');

  movies = signal<any[]>([]);

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.movieService.getRecommendations(id).subscribe((res) => {
        this.movies.set(res.results);
      });
    });
  }
}
