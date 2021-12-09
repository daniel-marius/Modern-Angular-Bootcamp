import { Component } from '@angular/core';

// create a new type HTMLElementEvent that has a target of type you pass
// type T must be a HTMLElement (e.g. HTMLTextAreaElement extends HTMLElement)
type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  length: number = 0;
  password: string = '';

  constructor() {}

  onChangeUseLetters(): void {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(): void {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(): void {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(e: Event): void {
    const parsedValue = parseInt((e.target as HTMLInputElement).value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onButtonClick(): void {
    const numbers: string = '0123456789';
    const letters: string = 'abcdefghijklmnopqrstuvwyz';
    const symbols: string = '!@#$%^&*()[]{}';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  getPassword(): string {
    return this.password;
  }
}
