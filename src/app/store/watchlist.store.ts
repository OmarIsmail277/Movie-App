import { inject, signal } from '@angular/core';
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

// Generic interface for both movies and TV shows
export interface MediaItem {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  overview?: string;
}

export const WatchlistStore = signalStore(
  { providedIn: 'root' },

  // ✅ STATE
  withState(() => ({
    movies: [] as MediaItem[],
  })),

  // ✅ METHODS
  withMethods((state) => ({
    addToWatchList(item: MediaItem) {
      const exists = state.movies().some((m) => m.id === item.id);
      if (!exists) {
        patchState(state, {
          movies: [...state.movies(), item],
        });
      }
    },

    removeFromWatchList(item: MediaItem) {
      patchState(state, {
        movies: state.movies().filter((m) => m.id !== item.id),
      });
    },

    toggleWatchList(item: MediaItem) {
      const exists = state.movies().some((m) => m.id === item.id);
      patchState(state, {
        movies: exists
          ? state.movies().filter((m) => m.id !== item.id)
          : [...state.movies(), item],
      });
    },
  }))
);
