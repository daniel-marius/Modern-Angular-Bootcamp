import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterContentInit {
  form: FormGroup = new FormGroup({
    field1: new FormControl(''),
    field2: new FormControl(''),
    attribute: new FormControl('Sachnummerbasis'),
  });

  optionsField1: string[] = ['One', 'Two', 'Three'];
  filteredOptions$: Observable<string[]> = this.form.controls['field1'].valueChanges.pipe(
    startWith(''),
    map((value) => this._filter(value, this.optionsField1))
  );

  selectedInput: string = '';

  ngOnInit(): void {
    this.form.controls['attribute'].valueChanges.subscribe((inputValue) => {
        this.selectedInput = inputValue;
        console.log(this.selectedInput);
    });
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }

  ngAfterContentInit(): void {
    this.selectedInput = 'Sachnummerbasis';
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  private _filter(value: string, options: string[]): string[] {
    const filterValue = value.toLowerCase();

    return options.filter((option: string) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
