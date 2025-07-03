import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { WatchlistStore } from '../../store/watchlist.store';

@Component({
  selector: 'app-navbar',
  imports: [DropdownModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  selectedLanguage = { name: 'En', code: 'en' }; // 👈 Set initial value

  languages = [
    { name: 'En', code: 'en' },
    { name: 'Ar', code: 'ar' },
    { name: 'Fr', code: 'fr' },
    { name: 'Zh', code: 'zh' },
  ];

  private watchlistStore = inject(WatchlistStore);
  get watchlistCount(): number {
    return this.watchlistStore.movies().length;
  }
}
