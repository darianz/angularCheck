import { Component, OnInit } from '@angular/core';
import {SketchCoversIMAGES} from './../../modules/sketchcovers';
@Component({
  selector: 'app-sketchcovers',
  templateUrl: './sketchcovers.component.html',
  styleUrls: ['./sketchcovers.component.css']
})
export class SketchcoversComponent implements OnInit {


  sketchCoversIMAGES = SketchCoversIMAGES;
  constructor() { }

  ngOnInit() {
  }

}
