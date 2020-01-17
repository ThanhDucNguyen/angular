import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ELEMENT_DATA} from '../../model/data_member';

export interface Nam_sinh {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    yearBirth: new FormControl(''),
  });
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
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.warn(this.profileForm.value);
    this.ns.push({value: '2000', viewValue: '2000'})
    ELEMENT_DATA.push({ho_ten: 'Nguyễn Anh LLLLLLong', so_dien_thoai: 444555666, email: 'nguyenanhlong@luvina.net', nam_sinh: 1995},)
  }
}
