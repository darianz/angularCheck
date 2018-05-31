import { ImageCheckComponent } from '../components/image-check/image-check.component';
import { ImageService } from './image.service';
import { Injectable , Input , Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ButtonService {
id: number ;

@Output() change: EventEmitter<number> = new EventEmitter();

  constructor(private imageService: ImageService) { }
  sendID(id: number) {
    return this.imageService.getImage(id);
  }
  changeID(id: number) {
    this.id = id;
    this.change.emit(this.id);
  }

  @Output() getID() {

    return this.id;
  }
}
