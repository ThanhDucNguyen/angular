import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-selectbox',
  templateUrl: './test-selectbox.component.html',
  styleUrls: ['./test-selectbox.component.css']
})
export class TestSelectboxComponent implements OnInit {
  selected = 'option2';
  constructor() { }

  ngOnInit() {
  }

}
