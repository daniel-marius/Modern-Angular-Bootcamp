import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss']
})
export class InputRadioComponent implements OnInit, OnChanges {
  @Input('name') name: string = '';
  @Input('value') value: any = '';
  @Input('checked') checked: boolean = true;

  color: ThemePalette = 'primary';

  constructor() {
    //console.log(this.value);
    //console.log(this.checked);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.name = changes['name'].currentValue;
    this.value = changes['value'].currentValue;
    this.checked = changes['checked'].currentValue;
  }

}
