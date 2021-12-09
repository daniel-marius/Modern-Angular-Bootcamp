import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 23, label: 'Reviews' },
  ];

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'Description'
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'Description'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
