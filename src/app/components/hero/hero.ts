import { Component, Input } from '@angular/core';
import { Search } from '../search/search';

@Component({
  selector: 'app-hero',
  imports: [Search],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  @Input() activeTabValue: number = 0;
}
