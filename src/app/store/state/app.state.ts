import { Bike } from 'src/app/models/bikes/bike';

export interface AppState {
  readonly bikes: Bike[];
  readonly rentedBikes: Bike[];
  readonly user: string
}

export const initialState: AppState = {
  bikes: [],
  rentedBikes: [],
  user: ''
};
