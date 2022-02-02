import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  min = 20;
  max = 250;

  lowerBound = 0;
  upperBound = 0;

  options: Options = {
    floor: 0,
    ceil: 480,
    step: 0.01
  }

  constructor() { }

  receiveValue($event: any): void {
    const { lower, upper } = $event;
    this.lowerBound = lower;
    this.upperBound = upper;
    console.log(lower, upper);
  }

  onClick(): void {
    if (this.lowerBound !== 0 && this.upperBound !== 0) {
      alert(this.lowerBound + ' ' +  this.upperBound);
    }

    alert('No lower/upper bound!');
  }
}
