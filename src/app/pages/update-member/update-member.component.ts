import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ServerService} from '../../services/member.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { Observable } from 'rxjs';
// import { switchMap } from 'rxjs/operators';
import * as data from '../../db/data.json'
export interface Nam_sinh {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    yearBirth: new FormControl(''),
  });
  slYearBirth: number;
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
  data_member = this.view();
  email: string;
  phone: number;
  private sub: any;
  private member: any;
  constructor(
    public serverService: ServerService,
    private route: ActivatedRoute,
    private router: Router,
    // public params: ParamMap
  ) {}

  ngOnInit() {}
  
  onSubmit(formData) {
    var data = formData
    if (data.name == "") data.name = this.data_member.name
    if (data.phone == "") data.phone = this.data_member.phone
    if (data.email == "") data.email = this.data_member.email
    if (data.yearBirth == "") data.yearBirth = this.data_member.yearBirth
    var member_old = this.view()
    var member_update = {
      name_old: member_old.name,
      yearBirth_old: member_old.yearBirth,
      name: data.name,
      phone: data.phone,
      email: data.email,
      yearBirth: data.yearBirth
    }
    this.serverService.updateMember(member_update)
    this.router.navigate(['/']);
  }
  view () {
    this.sub = this.route.params.subscribe(params => {
      this.email = params['email'];
      this.phone = params['phone']; // (+) converts string 'id' to a number
    });
    data['default'].forEach((item, index) => {
      if (this.email == item.email && this.phone == item.so_dien_thoai) {
        this.member = {
          name: item.ho_ten,
          phone: item.so_dien_thoai,
          email: item.email,
          yearBirth: item.nam_sinh
        }
      }
    });
    return this.member
  };

}
