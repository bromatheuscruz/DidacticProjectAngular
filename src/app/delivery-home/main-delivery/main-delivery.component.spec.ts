import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDeliveryComponent } from './main-delivery.component';

describe('MainDeliveryComponent', () => {
  let component: MainDeliveryComponent;
  let fixture: ComponentFixture<MainDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
