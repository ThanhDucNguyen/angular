import {Component, Inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ELEMENT_DATA} from '../../model/data_member';
import {ListMemberComponent} from '../../pages/list-member/list-member.component'
import {DialogDetail} from '../dialog/dialog-detail.component'
import {FormControl} from '@angular/forms';

export interface Nam_sinh {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'dialog-btn-update',
  templateUrl: 'dialog-update.component.html',
  styleUrls: ['dialog.component.css'],
})
export class DialogUpdate {  
  name: string;
  phone: number;
  email: string;
  yearBirth: number;
  nameVal = new FormControl('');
  constructor(
    public listMemberComponent:ListMemberComponent,
    public dialog: MatDialog) {
  }
  updateName() {
    this.nameVal.setValue('Nancy');
  }
  openDialog(member?): void {
    const dialogRef = this.dialog.open(DialogDetail, {
      width: '400px',
      data: {ho_ten: this.name, so_dien_thoai: this.phone, email: this.email, nam_sinh: this.yearBirth}
    });
    this.nameVal.setValue("Nancy")
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        ELEMENT_DATA.push(result)
        this.listMemberComponent.loadData()
      }
    });
  }
}