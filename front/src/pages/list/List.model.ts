import { Beer } from '../../model/Beer'
import { beerActions } from '../../redux/state/beers'

export type ListProps = {
  loading: boolean
  beers: Beer[]
  fetchBeersIfNot: typeof beerActions.fetchBeersIfNot
}
