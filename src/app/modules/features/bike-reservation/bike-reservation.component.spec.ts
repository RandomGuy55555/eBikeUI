import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeReservationComponent } from './bike-reservation.component';

describe('BikeReservationComponent', () => {
  let component: BikeReservationComponent;
  let fixture: ComponentFixture<BikeReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
