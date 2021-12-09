import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input('items') items: any[] = [];
  openedIndexItem: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onClick(index: number): void {
    if (index === this.openedIndexItem) {
      this.openedIndexItem = -1;
    } else {
      this.openedIndexItem = index;
    }
  }
}
