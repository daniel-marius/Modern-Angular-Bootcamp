import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnChanges {
  @Input('value') value: any;
  @Input('highValue') highValue: any;
  @Input('options') options: any

  @Output() values = new EventEmitter<{ lower: number, upper: number }>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.value = changes['value'].currentValue;
    this.highValue = changes['highValue'].currentValue;
  }

  sliderEvent(): void {
    this.values.emit({ lower: this.value, upper: this.highValue });
  }
}
