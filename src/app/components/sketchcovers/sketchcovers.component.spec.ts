import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchcoversComponent } from './sketchcovers.component';

describe('SketchcoversComponent', () => {
  let component: SketchcoversComponent;
  let fixture: ComponentFixture<SketchcoversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchcoversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchcoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
