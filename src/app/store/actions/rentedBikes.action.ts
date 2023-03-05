import { createAction, props } from "@ngrx/store";
import { BikeDto, BikeReservationDto } from "src/app/modules/features/bikes/bikes.dto";

export const loadRentedBike = createAction('[Bike Component] Load rented Bike', (username: string = '') => ({
  username
}));

export const loadRentedBikeFinished = createAction(
  '[Bike Component] Load Rented Bike Finished',
  props<{ payload: BikeDto[] }>()
);

export const deleteBikeReservation = createAction(
    '[Bike Component] Delete Bike Reservation',
    props<{ payload: BikeReservationDto }>()
  );
  
export const deleteBikeReservationSuccess = createAction(
  '[Bike Component] Delete Bike Reservation Success',
  props<{ payload: BikeReservationDto }>()
);

export const resetRentedBikes = createAction(
  '[Bike Component] Reset bikes state to initState'
);