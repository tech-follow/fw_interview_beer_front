import { beerActions } from "../../redux/state/beers"

export interface FormProps {
  loading: boolean
  createBeer: typeof beerActions.createBeer
}