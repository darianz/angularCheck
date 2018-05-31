import { ButtonService } from './services/button.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  imageSrc: {url: string} = {url: ''};
  parentChangeVar = 0;

  toogle() {
    this.parentChangeVar = this.parentChangeVar + 1;

  }
}
