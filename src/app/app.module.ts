import { IllustrationsComponent } from './components/illustrations/illustrations.component';

import { ImageService } from './services/image.service';
import { ButtonService } from './services/button.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImageCheckComponent } from './components/image-check/image-check.component';
import { ButtonComponent } from './components/button/button.component';

import { MaterialTabsComponent } from './components/material-tabs/material-tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BootstrapImagesComponent } from './components/bootstrap-images/bootstrap-images.component';
import { InstafeedComponent } from './components/instafeed/instafeed.component';
import { InstafeedService } from './services/instafeed.service';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FineartComponent } from './components/fineart/fineart.component';
import { InkedComponent } from './components/inked/inked.component';
import { SketchcoversComponent } from './components/sketchcovers/sketchcovers.component';
import { SketchComponent } from './components/sketch/sketch.component';



@NgModule({
  declarations: [
    AppComponent,
    ImageCheckComponent,
    ButtonComponent,
    MaterialTabsComponent,
    BootstrapImagesComponent,
    InstafeedComponent,
    IllustrationsComponent,
    PortfolioComponent,
    FineartComponent,
    InkedComponent,
    SketchcoversComponent,
    SketchComponent


  ],

  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule




  ],

  exports: [
    MatTabsModule
  ],
  providers: [ButtonService, ImageService, InstafeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
