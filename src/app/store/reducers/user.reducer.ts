import { createReducer, on, Action } from "@ngrx/store";
import { setUser } from "../actions/user.action";
import { initialState } from "../state/user.state";

const userReducer = createReducer(
    initialState,
    on(setUser, (state, { username }) => 
      username
    ),
  );
  
  export const usersReducer = (state: string | undefined, action: Action) =>
  userReducer(state, action);