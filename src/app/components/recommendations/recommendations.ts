import { Component, inject, Input, signal } from '@angular/core';
import { CardService } from '../../services/card.service';
import { ActivatedRoute } from '@angular/router';
import { MovieCard } from '../movie-card/movie-card';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { TvShowsCard } from '../tv-shows-card/tv-shows-card';

@Component({
  selector: 'app-recommendations',
  imports: [MovieCard, TvShowsCard, CommonModule, CarouselModule],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.scss',
})
export class Recommendations {
  private movieService = inject(CardService);
  private route = inject(ActivatedRoute);
  // public movieId = this.route.snapshot.paramMap.get('id');
  @Input() mediaType: string = 'movie';

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
      if (this.mediaType === 'movie') {
        this.movieService.getRecommendations(id).subscribe((res) => {
          this.movies.set(res.results);
        });
      } else {
        this.movieService.getTVShowsRecommendations(id).subscribe((res) => {
          // Transform TV show data
          const transformedResults = res.results.map((show) => ({
            ...show,
            title: show.name,
            release_date: show.first_air_date,
          }));
          this.movies.set(transformedResults);
        });
      }
    });
  }
}
