import { ButtonService } from './../../services/button.service';
import { ImageService } from './../../services/image.service';
import { Component, OnChanges, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image-check',
  templateUrl: './image-check.component.html',
  styleUrls: ['./image-check.component.css']
})
export class ImageCheckComponent implements OnInit, OnChanges  {

@Input()
id: number ;
activeUrl: any;
Image: any;
SecUrl = 'http://artofidan.com/wp-content/uploads/2017/07/CoverartBoardN.jpg';
flag = 0;
prevID ;

  constructor(private imageService: ImageService , private buttonService: ButtonService  ) {

}
@Output()
 idchange = new EventEmitter();

changeid() {
  this.idchange.emit();
}

getID(): void {
  this.id = this.buttonService.getID();
}
getImage(): void {
  this.Image = this.imageService.getImage(this.id);
}
setURL(): void {
this.activeUrl = this.Image.url;
}

setSecURL(): void {
  this.SecUrl = this.Image.url;
  }

start() {

}

  ngOnInit() {
    this.buttonService.change.subscribe(id => {
      this.id = id;
      this.getID();
      this.getImage();
      this.setURL();

     });

  }

  ngOnChanges(changes: SimpleChanges) {

    console.log('ENTERED ONCHANGES');
  }


}


/*
    this.buttonService.change.subscribe(id => {

      this.prevID = this.id;
      this.id = id;
      if (this.flag === 0) {

        this.getID();
        this.getImage();
        this.setURL();
        this.flag = 1;
      } else {

        this.getID();
        this.getImage();
        this.setSecURL();
        this.flag = 0;
      }

      if (this.id > this.prevID && this.flag === 1) {
        document.getElementById('Main').style.animationName = 'bounceInLeft';
        document.getElementById('Sec').style.animationName = 'bounceOutLeft';
      }

      if (this.id > this.prevID && this.flag === 0) {
        document.getElementById('Main').style.zIndex = '1' ;
        document.getElementById('Sec').style.zIndex = '100' ;
        document.getElementById('Sec').style.animationName = 'bounceInLeft';
        document.getElementById('Main').style.animationName = 'bounceOutLeft';

      }


    });

*/
