import { createAction, props } from '@ngrx/store';
import { BikeDto, BikeReservationDto } from 'src/app/modules/features/bikes/bikes.dto';

export const loadAllBikes = createAction('[Bike Component] Load all Bikes');

export const loadAllBikesFinished = createAction(
  '[Bike Component] Load all Bikes Finished',
  props<{ payload: BikeDto[] }>()
);

export const resetBikes = createAction(
  '[Bike Component] Reset bikes state to initState'
);

export const createBikeReservation = createAction(
  '[Bike Component] Create Bike Reservation',
  props<{ payload: BikeReservationDto }>()
);

export const createBikeReservationSuccess = createAction(
  '[Bike Component] Create Bike Reservation Success',
  props<{ payload: BikeReservationDto }>()
);

