import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  constructor() { }

   getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id === id);
  }


  // Previous Function
  // getImage(id: number) {
    // return IMAGES.slice(0).find(image => image.id === id);
// }
}

const IMAGES = [
  {'id': 1 , 'url': 'http://artofidan.com/wp-content/uploads/2017/07/CoverFineArtN.jpg'},
  {'id': 2 , 'url': 'http://artofidan.com/wp-content/uploads/2017/07/CoverSketchesN.jpg'},
  {'id': 3 , 'url': 'http://artofidan.com/wp-content/uploads/2017/07/coverportfolioN.jpg'},
  {'id': 4 , 'url': 'http://artofidan.com/wp-content/uploads/2017/07/coverinkN.jpg'},
  {'id': 5 , 'url': 'http://artofidan.com/wp-content/uploads/2017/07/coversketchcoversN.jpg'},
  {'id': 6 , 'url': 'http://artofidan.com/wp-content/uploads/2017/07/CoverartBoardN.jpg'},
  {'id': 7 , 'url': 'http://artofidan.com/wp-content/uploads/2017/07/CoverFineArtN.jpg'},
  {'id': 8 , 'url': 'http://artofidan.com/wp-content/uploads/2017/07/CoverartBoardN.jpg'},
];
