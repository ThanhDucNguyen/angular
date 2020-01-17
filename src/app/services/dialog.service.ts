import {Component, Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ELEMENT_DATA} from '../model/data_member';
import {ListMemberComponent} from '../pages/list-member/list-member.component'
import {DialogDetail} from '../template/dialog/dialog-detail.component'

@Injectable({
  providedIn: 'root'
})
export class DialogService {
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
        this.listMemberComponent.loadData()
      }
    });
  }
}
