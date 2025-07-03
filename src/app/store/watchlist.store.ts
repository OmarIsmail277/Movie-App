import { inject, signal } from '@angular/core';
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { Movie } from '../models/movie.model';

export const WatchlistStore = signalStore(
  { providedIn: 'root' },

  // ✅ STATE
  withState(() => ({
    movies: [] as Movie[],
  })),

  // ✅ METHODS
  withMethods((state) => ({
    addToWatchList(movie: Movie) {
      const exists = state.movies().some((m) => m.id === movie.id);
      if (!exists) {
        patchState(state, {
          movies: [...state.movies(), movie],
        });
      }
    },

    removeFromWatchList(movie: Movie) {
      patchState(state, {
        movies: state.movies().filter((m) => m.id !== movie.id),
      });
    },

    toggleWatchList(movie: Movie) {
      const exists = state.movies().some((m) => m.id === movie.id);
      patchState(state, {
        movies: exists
          ? state.movies().filter((m) => m.id !== movie.id)
          : [...state.movies(), movie],
      });
    },
  }))
);
