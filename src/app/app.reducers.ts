import { ActionReducerMap } from "@ngrx/store";
import {
  ERROR_REDUCER,
  ERROR_SLICE_INITIAL_STATE,
  ErrorSlice
} from "educama-frontend-shared";

export interface State {
  errorSlice: ErrorSlice;
}

export const INITIAL_STATE = {
  errorSlice: ERROR_SLICE_INITIAL_STATE
};

export const reducers: ActionReducerMap<State> = {
  errorSlice: ERROR_REDUCER
};
