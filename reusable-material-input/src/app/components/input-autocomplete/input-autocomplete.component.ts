import { Component, Input} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss'],
})
export class InputAutocompleteComponent {
  @Input('label') label: string = '';
  @Input('placeholder') placeholder: string = '';
  @Input('ariaLabel') ariaLabel: string = '';
  @Input('inputType') inputType: string = '';
  @Input ('control') control: FormControl = new FormControl();
  @Input('options') options: string[] | null = [];
}
