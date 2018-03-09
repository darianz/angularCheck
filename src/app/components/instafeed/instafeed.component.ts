import { InstafeedService } from './../../services/instafeed.service';
import { Component, OnInit , OnChanges } from '@angular/core';


@Component({
  selector: 'app-instafeed',
  templateUrl: './instafeed.component.html',
  styleUrls: ['./instafeed.component.css']
})
export class InstafeedComponent implements OnInit  {

  constructor(private instafeedService: InstafeedService ) {    }
  working;
  Run( ) {
    this.instafeedService.Run();
  }




  ngOnInit() {

 }



}


/**


 instaWorking() {
    this.working = this.instafeedService.InstaWorking();
  }
 ngOnChange() {
   this.instaWorking();
  }
  ngOnInit() {
    this.instaWorking();
 }
 Run(): void {
      this.Instafeed = require('instafeed.js');
      this.userFeed = new this.Instafeed({
      get: 'user',
      target: 'instafeed' ,
      userId: '1618086133',
      accessToken: '1618086133.3a81a9f.d8ddace86cba45efa7b4dc0318f944a7',
      resolution: 'low_resolution',
      template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
      sortBy: 'most-recent',
      limit: 3,

    });
    this.userFeed.run();
  }

 */







/**
  @Input() feed = new this.Instafeed({
    get: 'user',
    limit : 15,
    resolution: 'standard_resolution',
    sortBy: 'most-recent',
    userId: '1618086133',
    accessToken: '1618086133.3a81a9f.d8ddace86cba45efa7b4dc0318f944a7',
    template: '<div> <a href="{{link}}"> <img src="{{image}}" /></a> </div>'
});

*/
// this.feed.run();
