import { ButtonService } from './../../services/button.service';
import { ImageService } from './../../services/image.service';
import { Component, OnChanges, OnInit, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image-check',
  templateUrl: './image-check.component.html',
  styleUrls: ['./image-check.component.css']
})
export class ImageCheckComponent implements OnInit  {
activeUrl: any;
Image: any;

@Input() id: number;
  constructor(private imageService: ImageService , private buttonService: ButtonService) {
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



  ngOnInit() {
    this.buttonService.change.subscribe(id => {
      this.id = id;
      this.getID();
      this.getImage();
      this.setURL();

    });



  }


}


