import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: number = 0;
  images = [
    {
      title: 'At the Beach1',
      url:
        'https://static.posters.cz/image/750/postere/beach-sunset-i102003.jpg',
    },
    {
      title: 'At the Beach2',
      url:
        'https://static.posters.cz/image/750/postere/beach-sunset-i102003.jpg',
    },
    {
      title: 'At the Beach3',
      url:
        'https://static.posters.cz/image/750/postere/beach-sunset-i102003.jpg',
    },
    {
      title: 'At the Beach4',
      url:
        'https://static.posters.cz/image/750/postere/beach-sunset-i102003.jpg',
    },
    {
      title: 'At the Beach5',
      url:
        'https://static.posters.cz/image/750/postere/beach-sunset-i102003.jpg',
    },
    {
      title: 'At the Beach6',
      url:
        'https://static.posters.cz/image/750/postere/beach-sunset-i102003.jpg',
    },
  ];

  checkWindowIndex(index: number): boolean {
    return Math.abs(this.currentPage - index) < 5;
  }
}
