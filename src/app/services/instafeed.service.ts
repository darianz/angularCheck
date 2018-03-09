import { InstafeedComponent } from './../components/instafeed/instafeed.component';
import { ComponentFactoryResolver, Injectable, Inject, ReflectiveInjector } from '@angular/core';

@Injectable()
export class InstafeedService {

  Instafeed ;
  userFeed ;
  working = false;







  InstaWorking() {
   return this.working;

  }

    Run()  {
    this.Instafeed = require('instafeed.js');
    this.userFeed = new this.Instafeed({
    get: 'user',
    target: 'instafeed' ,
    userId: '1618086133',
    accessToken: '1618086133.3a81a9f.d8ddace86cba45efa7b4dc0318f944a7',
    resolution: 'low_resolution',
    template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
    sortBy: 'most-recent',
    limit: 3

  });
  this.working = true;
  this.userFeed.run();
}

}

/**
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
