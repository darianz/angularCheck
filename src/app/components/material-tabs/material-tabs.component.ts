import { ImageService } from './../../services/image.service';
import { ButtonService } from './../../services/button.service';
import { Component, OnInit , Input , Output } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-material-tabs',
  templateUrl: './material-tabs.component.html',
  styleUrls: ['./material-tabs.component.css']
})
export class MaterialTabsComponent implements OnInit {

  sendID(id: number) {
    this.buttonService.changeID(id);
  }

  onSelectChange(event) {
    this.sendID(event.index + 1);

  }

    constructor(private buttonService: ButtonService , private imageService: ImageService) {

     }


    ngOnInit() {
      this.buttonService.changeID(1);
    }

}
