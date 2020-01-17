import {Component, ViewChild, Inject} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {ELEMENT_DATA} from '../../model/data_member';
import {PeriodicElement} from '../../model/members';

export interface Nam_sinh {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent{
  displayedColumns: string[] = ['ho_ten', 'so_dien_thoai', 'email', 'nam_sinh', 'option'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() {}
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  loadData() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  }
  removeMember(member) {
    ELEMENT_DATA.forEach( (item, index) => {
      if (member == item)
        ELEMENT_DATA.splice(index,1)
        this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
    });
  }
  dialogUpdate(member) {
  }
  openDialog(): void {
    this.dialogService.openDialog();
  }
}
