import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapImagesComponent } from './bootstrap-images.component';

describe('BootstrapImagesComponent', () => {
  let component: BootstrapImagesComponent;
  let fixture: ComponentFixture<BootstrapImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
