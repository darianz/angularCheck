
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



@NgModule({
  declarations: [
    AppComponent,
    ImageCheckComponent,
    ButtonComponent,
    MaterialTabsComponent



  ],

  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule




  ],

  exports: [
    MatTabsModule
  ],
  providers: [ButtonService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
