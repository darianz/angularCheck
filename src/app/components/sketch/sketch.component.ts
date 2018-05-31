import { Component, OnInit } from '@angular/core';
import { SketchIMAGES } from './../../modules/sketch';
@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.css']
})
export class SketchComponent implements OnInit {


  sketchIMAGES = SketchIMAGES;
  constructor() { }

  ngOnInit() {

  }

}
