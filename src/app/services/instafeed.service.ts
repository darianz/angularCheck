import { InstafeedComponent } from './../components/instafeed/instafeed.component';
import {  Injectable } from '@angular/core';

@Injectable()
export class InstafeedService {

  Instafeed ;
  userFeed ;
  check = 0;
  // tslint:disable-next-line:max-line-length
  template = '<div style="display: -webkit-inline-box; "> <a  href="{{link}}" target="_blank" id="{{id}}"><img  src="{{image}}" style="margin: 2% 2% 2% 2%;" /> </a> <p style="display: -webkit-inline-box; "><img src="/assets/instafeed/LikesSymbol.png"/> {{likes}}</p></div> ' ;
    Run()  {
    this.Instafeed = require('instafeed.js');
    this.userFeed = new this.Instafeed({
    get: 'user',
    target: 'instafeed' ,
    userId: '1618086133',
    accessToken: '1618086133.3a81a9f.d8ddace86cba45efa7b4dc0318f944a7',
    resolution: 'low_resolution',
    template: this.template,
    sortBy: 'most-recent',
    limit: 16

  });
  // prevent from this.userFeed.run(); to run multiply times
  if (document.getElementById('instafeed') != null && this.check === 0) {
    this.check = 1;
    this.userFeed.run();
  }

}

}

/**

 /assets/instafeed/LikesSymbol.png
  Comments:{{comments}}

 style="display: -webkit-inline-box;position: absolute;margin-top: -1rem;margin-left: 10rem;


  this.working = true;
  this.userFeed.run();
if ($('#instafeed').length) {
    feed.run();
}



   factoryResolver;
  rootViewContainer;
  constructor(@Inject (ComponentFactoryResolver) factoryResolver) {

    this.factoryResolver = factoryResolver;
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(InstafeedComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }

 */
