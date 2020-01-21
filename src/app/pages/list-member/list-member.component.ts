import {Component, ViewChild, Inject} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {ELEMENT_DATA} from '../../model/data_member';
import {PeriodicElement} from '../../model/members';
import * as data from '../../db/data.json'
import {ServerService} from '../../services/member.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface Nam_sinh {
  value: string;
  viewValue: string;
}
export interface DialogData {
  member: any;
}

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent{
  displayedColumns: string[] = ['ho_ten', 'so_dien_thoai', 'email', 'nam_sinh', 'option'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = new MatTableDataSource<PeriodicElement>(this.view());
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  member: any;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(public serverService: ServerService, public dialog: MatDialog) {}
  
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openDialog(member): void {
    console.log(member)
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: {member: member}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.member = result;
    });
  };

  view () {
    return data['default']
  };

  loadData() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  };

  removeMember(member) {
    this.serverService.deleteMember(member)
  };
}


/**
 * @title Dialog Overview
 */

@Component({
  selector: 'dialog-detail',
  templateUrl: 'dialog-detail.html',
  styleUrls: ['dialog.component.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public serverService: ServerService,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  removeMember(member) {
    console.log(member)
    this.serverService.deleteMember(member)
  };

}
