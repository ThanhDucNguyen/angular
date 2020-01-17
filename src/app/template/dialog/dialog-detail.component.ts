import {Component, Inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
/**
 * @title Dialog Overview
 */
export interface Nam_sinh {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'dialog-detail',
  templateUrl: 'dialog-detail.html',
  styleUrls: ['dialog.component.css'],
})
export class DialogDetail{
  nameVal = new FormControl('');
  ns: Nam_sinh[] = [
    {value: '1991', viewValue: '1991'},
    {value: '1992', viewValue: '1992'},
    {value: '1993', viewValue: '1993'},
    {value: '1994', viewValue: '1994'},
    {value: '1995', viewValue: '1995'},
    {value: '1996', viewValue: '1996'},
    {value: '1997', viewValue: '1997'},
    {value: '1998', viewValue: '1998'},
    {value: '1999', viewValue: '1999'},
  ];
  constructor(
    public dialogRef: MatDialogRef<DialogDetail>,
    @Inject(MAT_DIALOG_DATA) public data: Nam_sinh) {
      this.nameVal.setValue("Nancy")
  }
  updateName() {
    this.nameVal.setValue('Nancy');
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}