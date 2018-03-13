import { SketchComponent } from './../sketch/sketch.component';
import { SketchcoversComponent } from './../sketchcovers/sketchcovers.component';
import { InkedComponent } from './../inked/inked.component';
import { FineartComponent } from './../fineart/fineart.component';
import { PortfolioComponent } from './../portfolio/portfolio.component';
import { IllustrationsComponent } from './../illustrations/illustrations.component';
import { InstafeedComponent } from './../instafeed/instafeed.component';
import { ImageService } from './../../services/image.service';
import { ButtonService } from './../../services/button.service';
import { Component, OnInit , Input , Output } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-material-tabs',
  templateUrl: './material-tabs.component.html',
  styleUrls: ['./material-tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MaterialTabsComponent implements OnInit {



  // can be inserted SWIPE THING
  @Input()
  tabId: number;

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


/**
  // Swipe var
  selectedIndex = 0;



  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  selectChange(): void {
    console.log('Selected INDEX: ' + this.selectedIndex);
  }

   // Action triggered when user swipes
   swipe(selectedIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    // Out of range
    if (this.selectedIndex < 0 || this.selectedIndex > 1 ) {
      return;
    }

    // Swipe left, next tab
    if (action === this.SWIPE_ACTION.LEFT) {
      const isLast = this.selectedIndex === 1;
      this.selectedIndex = isLast ? 0 : this.selectedIndex + 1;
      console.log('Swipe right - INDEX: ' + this.selectedIndex);
    }

    // Swipe right, previous tab
    if (action === this.SWIPE_ACTION.RIGHT) {
      const isFirst = this.selectedIndex === 0;
      this.selectedIndex = isFirst ? 1 : this.selectedIndex - 1;
      console.log('Swipe left - INDEX: ' + this.selectedIndex);
    }
  }

  // End of Swipe Things

  */
