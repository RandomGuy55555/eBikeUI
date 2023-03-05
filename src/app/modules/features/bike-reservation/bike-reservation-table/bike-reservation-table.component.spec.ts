import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeReservationTableComponent } from './bike-reservation-table.component';

describe('BikeReservationTableComponent', () => {
  let component: BikeReservationTableComponent;
  let fixture: ComponentFixture<BikeReservationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeReservationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeReservationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
