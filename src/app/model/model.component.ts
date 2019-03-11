import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  height = '200';
  width = '300';
  margintop = '0';
  marginbottom = '0';
  marginleft = '0';
  marginright = '0';

  constructor() { }

  ngOnInit() {
  }

}
