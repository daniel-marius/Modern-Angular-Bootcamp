import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef  } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

// const options = {
//         title: 'CONFIRM.DOWNLOAD.JOB.TITLE',
//         message: 'CONFIRM.DOWNLOAD.JOB.MESSAGE',
//         cancelText: 'CONFIRM.DOWNLOAD.JOB.CANCELTEXT',
//         confirmText: 'CONFIRM.DOWNLOAD.JOB.CONFIRMTEXT'
//       };

@Injectable()
export class ConfirmDialogService {
  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  public open(options: any) {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
         data: {
           title: options.title,
           message: options.message,
           cancelText: options.cancelText,
           confirmText: options.confirmText
         }
    });
  }
  public confirmed(): Observable<any> {

    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
        return res;
      }
    ));
  }
}
