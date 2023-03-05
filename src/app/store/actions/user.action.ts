import { createAction, props } from "@ngrx/store";

// export const setUser = createAction(
//     '[SignIn Component] SignIn Succeeded',
//     props<{ payload: string }>()
// );

export const setUser = createAction('[Bike Component] Load rented Bike', (username: string = '') => ({
    username
  }));
