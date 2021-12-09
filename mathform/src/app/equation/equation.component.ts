import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { delay, filter, scan } from 'rxjs/operators';

import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
})
export class EquationComponent implements OnInit {
  secondsPerSolutions: number = 0;
  mathForm: FormGroup = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      answer: new FormControl('', [Validators.required]),
    },
    [MathValidators.addition('answer', 'a', 'b')]
  );

  constructor() {}

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  ngOnInit(): void {
    this.mathForm.statusChanges
      .pipe(
        filter((value) => value === 'VALID'),
        delay(100),
        scan((acc, value) => {
          return {
            numberSolved: acc.numberSolved + 1,
            startTime: acc.startTime
          }
        }, { numberSolved: 0, startTime: new Date() })
      )
      .subscribe(({ numberSolved, startTime }) => {
        numberSolved += 1;
        this.secondsPerSolutions = (
          new Date().getTime() - startTime.getTime()
        ) / numberSolved / 1000;

        this.mathForm.controls['a'].setValue(this.randomNumber());
        this.mathForm.controls['b'].setValue(this.randomNumber());
        this.mathForm.controls['answer'].setValue('');
      });
  }

  randomNumber(): number {
    return Math.floor(Math.random() * 10);
  }
}
