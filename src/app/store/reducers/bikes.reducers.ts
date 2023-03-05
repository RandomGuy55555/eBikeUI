import { Action, createReducer, on } from '@ngrx/store';
import { Bike } from 'src/app/models/bikes/bike';
import {
  createBikeReservationSuccess,
  loadAllBikesFinished,
  resetBikes,
} from '../actions/ebikes.actions';
import { initialState } from '../state/bikes.state';

const bikeReducer = createReducer(
  initialState,
  on(loadAllBikesFinished, (state, { payload }) => payload),
  // on(createBikeReservationSuccess, (state, { payload }) => {
  //   state = state.map((value) => (value.bikeId === payload.bikeId ? value.rented=false : value));
  //   return state;
  // }),
  on(createBikeReservationSuccess, (state, { payload }) => {
    let clonedState = state.map((x) => {
      return { ...x };
   });
   clonedState.map((bike) => {
      if (bike.bikeId === payload.bikeId){
        bike.rented = true
      }
   });
    return clonedState;
  }),
  on(resetBikes, () => initialState)
);

export const bikesReducer = (state: Bike[] | undefined, action: Action) =>
  bikeReducer(state, action);
