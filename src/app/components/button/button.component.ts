import { ImageService } from './../../services/image.service';
import { ButtonService } from './../../services/button.service';
import { Component, OnInit, Input , Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

 sendID(id: number) {
  this.buttonService.changeID(id);
}


  constructor(private buttonService: ButtonService , private imageService: ImageService) {

   }


  ngOnInit() {

  }

}
