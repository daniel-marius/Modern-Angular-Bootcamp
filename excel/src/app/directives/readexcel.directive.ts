import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as XLSX from 'xlsx';

@Directive({
  selector: '[appReadexcel]',
  exportAs: 'readexcel',
})
export class ReadexcelDirective {
  excelObservable: Observable<any> = new Observable();
  @Output() eventEmitter = new EventEmitter();

  constructor() {}

  @HostListener('change', ['$event.target'])
  onChange(target: HTMLInputElement): void {
    let file: File;

    if (target.files) {
      file = target.files[0];
    }

    this.excelObservable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    this.excelObservable.subscribe((d) => {
      this.eventEmitter.emit(d);
    });
  }

  readFile(file: File, subscriber: Subscriber<any>): void {
    const fileReader: FileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e: ProgressEvent<FileReader>) => {
      let bufferArray: ArrayBuffer | string | null | undefined =
        e.target?.result;
      // if (e.target) {
      //   bufferArray = e.target.result;
      // }

      const wb: XLSX.WorkBook = XLSX.read(bufferArray, { type: 'buffer' });

      const wsName: string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsName];

      const data = XLSX.utils.sheet_to_json(ws);

      subscriber.next(data);
      subscriber.complete();
    };
  }
}
