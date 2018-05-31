import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backtotop',
  templateUrl: './backtotop.component.html',
  styleUrls: ['./backtotop.component.css']
})
export class BacktotopComponent implements OnInit {




  constructor() {

   }



  ScrollToTop() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    window.onscroll =  function () {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById('back-to-top').style.display = 'block';
    } else {
        document.getElementById('back-to-top').style.display = 'none' ;
    }
    };

  }

}
