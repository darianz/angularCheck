import { Component, OnInit } from '@angular/core';
import {IllustrationsIMAGES} from './../../modules/illustrations';
@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.css']
})
export class IllustrationsComponent implements OnInit {

illustrationsIMAGESImages = IllustrationsIMAGES;
  constructor() { }

  ngOnInit() {
  }

}
