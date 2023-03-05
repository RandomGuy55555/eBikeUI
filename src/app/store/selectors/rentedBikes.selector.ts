import { createSelector } from '@ngrx/store';
import { Bike } from 'src/app/models/bikes/bike';
import { AppState } from '../state/app.state';

const rentedBikesState = (state: AppState) => state.rentedBikes;

export const rentedBikesSelector = createSelector(
    rentedBikesState,
  (state: Bike[]) => state
);
