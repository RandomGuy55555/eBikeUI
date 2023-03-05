import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";

const usernameState = (state: AppState) => state.user;

export const usernameSelector = createSelector(
  usernameState,
  (state: string) => state
);