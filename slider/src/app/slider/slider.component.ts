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

  ngOnInit(): void {
    // console.log(this.value, this.highValue);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.value = changes['value'].currentValue;
    this.highValue = changes['highValue'].currentValue;
  }

  sliderEvent(): void {
    this.values.emit({ lower: this.value, upper: this.highValue });
  }

  onChangeValue($event: any): void {
    if ($event.target.value) {
      this.values.emit({ lower: $event.target.value, upper: this.highValue });
    }
  }

  onChangeHighValue($event: any): void {
    if ($event.target.value) {
      this.values.emit({ lower: this.value, upper: $event.target.value });
    }
  }
}
