import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FineartComponent } from './fineart.component';

describe('FineartComponent', () => {
  let component: FineartComponent;
  let fixture: ComponentFixture<FineartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FineartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FineartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
