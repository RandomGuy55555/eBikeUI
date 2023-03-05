import { createSelector } from '@ngrx/store';
import { Bike } from 'src/app/models/bikes/bike';
import { AppState } from '../state/app.state';

const bikesState = (state: AppState) => state.bikes;

export const bikesSelector = createSelector(
  bikesState,
  (state: Bike[]) => state
);
