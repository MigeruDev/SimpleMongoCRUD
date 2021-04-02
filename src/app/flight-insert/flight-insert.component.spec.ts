import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightInsertComponent } from './flight-insert.component';

describe('FlightInsertComponent', () => {
  let component: FlightInsertComponent;
  let fixture: ComponentFixture<FlightInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
