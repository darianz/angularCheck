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
@Input() activeUrl: any;
Image: any;
flag = 0;
prevID ;
secUrl = 'http://artofidan.com/wp-content/uploads/2017/07/CoverSketchesN.jpg';
@Input() changeVar = 0;

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
  this.secUrl = this.activeUrl;
this.activeUrl = this.Image.url;

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

    this.buttonService.change.subscribe(id => {

      this.prevID = this.id;
      this.id = id;


      if (this.id > this.prevID ) { // CHOOSING RIGHTER TAB
        // alert('check animation');
        document.getElementById('Sec').style.opacity = '1' ;
        document.getElementById('Main').style.left = '100%';
        document.getElementById('Main').style.animationDuration = '0.5s';
        document.getElementById('Main').style.animationName = 'enteringFromRight';
        document.getElementById('Sec').style.left = '0%';
        document.getElementById('Sec').style.animationDuration = '0.5s';
        document.getElementById('Sec').style.animationName = 'exitToLeft';

        // document.getElementById('Main').style.transform = 'translateX(100%)';
        const delayInMilliseconds = 500; // 0.5 second

        setTimeout(function() {
        // your code to be executed after 0.5 second

        document.getElementById('Main').style.animationName = '';
        document.getElementById('Sec').style.animationName = '';
        document.getElementById('Sec').style.opacity = '0' ;
        document.getElementById('Main').style.left = '100%';
        document.getElementById('Main').style.left = '0%';
        }, delayInMilliseconds);

        }
        if (this.id < this.prevID ) { // OTHER OPTIONNN

          document.getElementById('Sec').style.opacity = '1' ;
          document.getElementById('Main').style.left = '-100%';
          document.getElementById('Main').style.animationDuration = '0.5s';
          document.getElementById('Main').style.animationName = 'enteringFromLeft';
          document.getElementById('Sec').style.left = '0%';
          document.getElementById('Sec').style.animationDuration = '0.5s';
          document.getElementById('Sec').style.animationName = 'exitToRight';

          // document.getElementById('Main').style.transform = 'translateX(100%)';
          const delayInMilliseconds = 500; // 0.5 second

          setTimeout(function() {
          // your code to be executed after 0.5 second

          document.getElementById('Main').style.animationName = '';
          document.getElementById('Sec').style.animationName = '';
          document.getElementById('Sec').style.opacity = '0' ;
          document.getElementById('Main').style.left = '-100%';
          document.getElementById('Main').style.left = '0%';
          }, delayInMilliseconds);


        }


    });
  }


}

/*


*/
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
