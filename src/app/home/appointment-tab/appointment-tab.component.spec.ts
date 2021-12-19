import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentTabComponent } from './appointment-tab.component';

describe('AppointmentTabComponent', () => {
  let component: AppointmentTabComponent;
  let fixture: ComponentFixture<AppointmentTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
