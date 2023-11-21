import { AnyBeerActionResut } from './beers.actions'
import { BeerActionTypes, BeerReducerState } from './beers.model'

const defaultBeersState: BeerReducerState = {
  items: [],
  newItems: [],
  loading: false,
}

export const beersReducer = (
  state = defaultBeersState,
  action: AnyBeerActionResut,
): BeerReducerState => {
  switch (action.type) {
    case BeerActionTypes.BEERS_SET:
      return { ...state, items: action.beers }
    case BeerActionTypes.BEERS_FETCH:
      return { ...state, loading: true }
    case BeerActionTypes.BEERS_FETCH_SUCCESS:
    case BeerActionTypes.BEERS_FETCH_FAILURE:
      return { ...state, loading: false }
    case BeerActionTypes.BEERS_SET_NEW:
      return { ...state, newItems: [...state.newItems, action.beer] }
    case BeerActionTypes.BEERS_RATED_SUCCESS:
    case BeerActionTypes.BEERS_RATED_FAILURE:
      return { ...state, loading: false }
    case BeerActionTypes.BEERS_SET_NEW_SCORED:
      const { beer: beerScored } = action;
      const idxScoredBeer = state.items.findIndex((item) => item.uuid === beerScored.uuid)
      if (idxScoredBeer !== -1) {
        state.items.splice(idxScoredBeer, 1, beerScored)
      }
      const idxScoredBeer2 = state.newItems.findIndex((newItem) => newItem.uuid === beerScored.uuid)
      if (idxScoredBeer2 !== -1) {
        state.newItems.splice(idxScoredBeer2, 1, beerScored)
      }
    default:
      return state
  }
}
