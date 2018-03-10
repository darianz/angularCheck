import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InkedComponent } from './inked.component';

describe('InkedComponent', () => {
  let component: InkedComponent;
  let fixture: ComponentFixture<InkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
