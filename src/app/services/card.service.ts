import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private API_KEY = '9639c6fb50f0cab6d795beda492c5709';
  private API_BASE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.API_KEY}`;

  private http = inject(HttpClient);
  private _movies = signal<any[]>([]); // Writable signal that holds an array of any
  private _shows = signal<any[]>([]); // Separate signal for TV shows
  readonly movies = this._movies.asReadonly();
  readonly shows = this._shows.asReadonly();

  constructor() {}

  public getMovies(page: number = 1) {
    const url = `${this.API_BASE_URL}&page=${page}`;
    this.http
      .get<{ results: any[]; total_pages: number; page: number }>(url)
      .subscribe((response) => this._movies.set(response.results));
  }

  public getTVShows(page: number = 1) {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${this.API_KEY}&page=${page}`;
    this.http
      .get<{ results: any[]; total_pages: number; page: number }>(url)
      .subscribe((response) => {
        // Transform TV show data to match movie structure
        const transformedShows = response.results.map((show) => ({
          ...show,
          title: show.name, // TV shows use 'name' instead of 'title'
          release_date: show.first_air_date, // TV shows use 'first_air_date' instead of 'release_date'
        }));
        this._shows.set(transformedShows);
      });
  }

  public searchMovies(query: string) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${
      this.API_KEY
    }&query=${encodeURIComponent(query)}`;
    return this.http.get<{ results: any[] }>(url);
  }

  public searchTVShows(query: string) {
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${
      this.API_KEY
    }&query=${encodeURIComponent(query)}`;
    return this.http.get<{ results: any[] }>(url).pipe(
      map((response) => ({
        ...response,
        results: response.results.map((show) => ({
          ...show,
          title: show.name, // TV shows use 'name' instead of 'title'
          release_date: show.first_air_date, // TV shows use 'first_air_date' instead of 'release_date'
        })),
      }))
    );
  }
  public getMovieDetails(id: number) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}`;
    return this.http.get<any>(url);
  }

  public getTVShowsDetails(id: number) {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${this.API_KEY}`;
    return this.http.get<any>(url);
  }

  public getRecommendations(id: number) {
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${this.API_KEY}`;
    return this.http.get<{ results: any[] }>(url);
  }

  public getTVShowsRecommendations(id: number) {
    const url = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${this.API_KEY}`;
    return this.http.get<{ results: any[] }>(url);
  }
}
