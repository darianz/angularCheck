import { Component, OnInit } from '@angular/core';
import { PortfolioIMAGES } from './../../modules/portfolio';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {


  PortfolioIMAGESImages = PortfolioIMAGES;
  constructor() { }

  ngOnInit() {
  }

}
