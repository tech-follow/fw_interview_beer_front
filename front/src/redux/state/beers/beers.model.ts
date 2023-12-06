import { Beer } from "../../../model/Beer";

export const BeerActionTypes = {
  BEERS_FETCH_IF_NOT: "@BEERS/FETCH_IF_NOT",
  BEERS_FETCH: "@BEERS/FETCH",
  BEERS_FETCH_SUCCESS: "@BEERS/FETCH_SUCCESS",
  BEERS_FETCH_FAILURE: "@BEERS/FETCH_FAILURE",
  BEERS_SET: "@BEERS/SET",
  BEERS_CREATE: "@BEERS/CREATE",
  BEERS_SET_NEW: "@BEERS/SET_NEW",
  BEERS_RATE: "@BEERS/RATE",
  BEERS_UPDATE: "@BEERS/BEERS_UPDATE",
} as const;

export interface BeerReducerState {
  items: Array<Beer>;
  newItems: Array<Beer>;
  loading: boolean;
}
