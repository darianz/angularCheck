import { Component, OnInit } from '@angular/core';
import { FineArtIMAGES } from './../../modules/fineart';
@Component({
  selector: 'app-fineart',
  templateUrl: './fineart.component.html',
  styleUrls: ['./fineart.component.css']
})
export class FineartComponent implements OnInit {


  fineArtIMAGES = FineArtIMAGES;
  constructor() { }

  ngOnInit() {
  }

}
