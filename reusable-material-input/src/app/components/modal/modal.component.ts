import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { ModalActionsService } from 'src/app/services/modal-actions.service';
import { ModalActionsService } from '../../services/modal-actions.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    public dialogRef: MatDialogRef<ModalComponent>,
    private modalService: ModalActionsService
  ) {
    console.log(this.modalData);
  }

  ngOnInit() {}

  actionFunction() {
    this.modalService.modalAction(this.modalData);
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
