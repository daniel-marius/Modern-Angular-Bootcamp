import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { ConfirmDialogService } from './services/confirm-dialog.service';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogInterface } from './models/dialog.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterContentInit {
  public dialogSubmissionMessage: string = '';
  form: FormGroup = new FormGroup({
    field1: new FormControl(''),
    field2: new FormControl(''),
    attribute: new FormControl('Sachnummerbasis'),
  });

  optionsField1: string[] = ['One', 'Two', 'Three'];
  filteredOptions$: Observable<string[]> = this.form.controls[
    'field1'
  ].valueChanges.pipe(
    startWith(''),
    map((value) => this._filter(value, this.optionsField1))
  );

  selectedInput: string = '';

  constructor(
    public matDialog: MatDialog,
    private dialogService: ConfirmDialogService
  ) {}

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

  openLogoutModal() {
    const userId = 'user01';
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';
    dialogConfig.data = {
      name: 'logout',
      title: 'Are you sure you want to logout?',
      description:
        "Pretend this is a convincing argument on why you shouldn't logout :)",
      actionButtonText: 'Logout',
      userId: userId,
    };
    // https://material.angular.io/components/dialog/overview
    this.matDialog.open(ModalComponent, dialogConfig);
  }

  openDeleteProductModal() {
    const productId = 'prod01';
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';
    dialogConfig.data = {
      name: 'deleteProduct',
      title: 'Are you sure you want to delete this product?',
      description:
        'If you continue, the product with ID ' +
        productId +
        ' will be deleted.',
      actionButtonText: 'Delete',
      productId: productId,
    };
    // https://material.angular.io/components/dialog/overview
    this.matDialog.open(ModalComponent, dialogConfig);
  }

  openDialogOne() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'I am created by Reusable dialog',
      dialogContent: 'I am first dialog',
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Submit',
      callbackMethod: () => {
        this.performDialogSubmitMethodOne();
      },
    };
    this.matDialog.open(DialogComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }

  /**
   * This method invokes the second dialog
   */
  openDialogTwo() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'I am created by Reusable dialog',
      dialogContent: 'I am second dialog',
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Submit',
      callbackMethod: () => {
        this.performDialogSubmitMethodTwo();
      },
    };
    this.matDialog.open(DialogComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }

  performDialogSubmitMethodOne() {
    this.dialogSubmissionMessage = 'The dialog submitted from the Dialog ONE';
  }

  performDialogSubmitMethodTwo() {
    this.dialogSubmissionMessage = 'The dialog submitted from the Dialog TWO';
  }

  handleClick() {
    const options = {
      title: 'Leave page?',
      message:
        'By leaving this page you will permanently lose your form changes.',
      cancelText: 'CANCEL',
      confirmText: 'YES, LEAVE PAGE',
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.saveData();
      }
    });
  }

  saveData() {
    console.log('Dialog Service!');
  }

  private _filter(value: string, options: string[]): string[] {
    const filterValue = value.toLowerCase();

    return options.filter((option: string) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
