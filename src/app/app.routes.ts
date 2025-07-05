import { Routes } from '@angular/router';
import { Home } from './components/home/home';
// import { HomeComponent } from '../app';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../src/app/components/home/home').then((m) => m.Home),
  },
  {
    path: 'watchlist',
    loadComponent: () =>
      import('../../src/app/components/watchlist/watchlist').then(
        (m) => m.Watchlist
      ),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('../../src/app/components/search-results/search-results').then(
        (m) => m.SearchResults
      ),
  },
  {
    path: 'details/:type/:id',
    loadComponent: () =>
      import('../../src/app/components/details/details').then((m) => m.Details),
  },
];
