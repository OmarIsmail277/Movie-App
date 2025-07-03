import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private API_KEY = '9639c6fb50f0cab6d795beda492c5709';
  private API_BASE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.API_KEY}`;

  private http = inject(HttpClient);
  private _movies = signal<any[]>([]); // Writable signal that holds an array of any
  readonly movies = this._movies.asReadonly();

  constructor() {}

  public getMovies(page: number = 1) {
    const url = `${this.API_BASE_URL}&page=${page}`;
    this.http
      .get<{ results: any[]; total_pages: number; page: number }>(url)
      .subscribe((response) => this._movies.set(response.results));
  }

  public searchMovies(query: string) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${
      this.API_KEY
    }&query=${encodeURIComponent(query)}`;
    return this.http.get<{ results: any[] }>(url);
  }
}
