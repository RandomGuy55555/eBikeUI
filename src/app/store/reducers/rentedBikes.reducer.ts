import { Action, createReducer, on } from '@ngrx/store';
import { Bike } from 'src/app/models/bikes/bike';
import { BikeDto } from 'src/app/modules/features/bikes/bikes.dto';
import { deleteBikeReservationSuccess, loadRentedBikeFinished, resetRentedBikes } from '../actions/rentedBikes.action';
import { initialState } from '../state/bikes.state';

const rentedBikeReducer = createReducer(
  initialState,
  on(loadRentedBikeFinished, (state, { payload }) => {
    let clonedState: BikeDto[] = []
    payload.map((bike) => {
      if (bike.name != ""){
        clonedState.push(bike)
      }
    });
  return clonedState;
  }),
  on(deleteBikeReservationSuccess, (state, { payload }) => {
    let clonedState: BikeDto[] = []
   state.map((bike) => {
      if (bike.bikeId != payload.bikeId){
        clonedState.push()
      }
   });
    return clonedState;
  }),
  on(resetRentedBikes, () => initialState)
);

export const rentedBikesReducer = (state: Bike[] | undefined, action: Action) =>
rentedBikeReducer(state, action);
