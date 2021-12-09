import { Component, OnInit, Input } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input('label') label: string = '';
  @Input('control') control: FormControl = new FormControl();
  @Input('inputType') inputType: string = '';

  constructor() {}

  ngOnInit(): void {}

  showErrors(): boolean | ValidationErrors | null {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
