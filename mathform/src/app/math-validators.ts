import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const num1 = form.value[sourceOne];
      const num2 = form.value[sourceTwo];
      if (num1 + num2 === parseInt(sum)) {
        return null;
      }
      return { addition: true };
    };
  }

  static substraction() {

  }
}
