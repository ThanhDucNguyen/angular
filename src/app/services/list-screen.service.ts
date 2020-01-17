import { Injectable } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ELEMENT_DATA} from '../model/data_member';
import {PeriodicElement} from '../model/members';

@Injectable({
  providedIn: 'root'
})
export class ListScreenService {
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
