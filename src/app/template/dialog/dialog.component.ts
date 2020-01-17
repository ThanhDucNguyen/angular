import {Component, Inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ELEMENT_DATA} from '../../model/data_member';
import {ListMemberComponent} from '../../pages/list-member/list-member.component'
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
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit() {
    
  }
}

/**
 * @title Dialog Overview
 */
export interface Nam_sinh {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'dialog-btn',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css'],
})
export class DialogOverview{  
  name: string;
  phone: number;
  email: string;
  yearBirth: number;
  constructor(
    public listMemberComponent:ListMemberComponent,
    public dialog: MatDialog) {
  }
  openDialog(member?): void {
    const dialogRef = this.dialog.open(DialogDetail, {
      width: '400px',
      data: {ho_ten: this.name, so_dien_thoai: this.phone, email: this.email, nam_sinh: this.yearBirth}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        ELEMENT_DATA.push(result)
        console.log(result)
        this.listMemberComponent.loadData()
      }
    });
  }
}