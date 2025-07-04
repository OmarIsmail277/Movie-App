import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { PrimeNG } from 'primeng/config';
import { Navbar } from './components/navbar/navbar';
import { Announcement } from './components/announcement/announcement';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Navbar, Announcement],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Movie-App';

  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
