import { StoreState } from '../index'

export const beerItemsSelector = (state: StoreState) => state.beers.items

export const allBeersSelector = (state: StoreState) => [
  ...beerItemsSelector(state),
  ...state.beers.newItems,
]
