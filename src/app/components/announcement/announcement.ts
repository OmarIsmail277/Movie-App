import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-announcement',
  imports: [CommonModule],
  templateUrl: './announcement.html',
  styleUrl: './announcement.scss',
})
export class Announcement {
  // Palestine flag colors
  readonly flagColors = {
    black: '#000000',
    white: '#FFFFFF',
    green: '#009736',
    red: '#CE1126'
  };
} 