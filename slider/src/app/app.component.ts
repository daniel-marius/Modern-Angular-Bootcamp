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

  options: Options = {
    floor: 0,
    ceil: 480
  }

  receiveValue($event: any) {
    const { lower, upper } = $event;
    console.log(lower, upper);
  }
}
