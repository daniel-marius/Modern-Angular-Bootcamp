import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;

  items = [
    { title: 'title1', content: 'content1' },
    { title: 'title2', content: 'content2' },
    { title: 'title3', content: 'content3' },
  ];

  constructor() { }

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
