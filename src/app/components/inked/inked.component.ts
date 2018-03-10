import { Component, OnInit } from '@angular/core';
import { InkedIMAGES } from './../../modules/inked';
@Component({
  selector: 'app-inked',
  templateUrl: './inked.component.html',
  styleUrls: ['./inked.component.css']
})
export class InkedComponent implements OnInit {


  inkedIMAGES = InkedIMAGES;
  constructor() { }

  ngOnInit() {
  }

}
