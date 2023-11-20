import { connect } from 'react-redux'
import { beerActions } from '../../redux/state/beers'
import ListForm from './Form.component'
import { StoreState } from '../../redux'

export default connect(
  (state: StoreState) => {
    return {
      loading: state.beers.loading,
    }
  },
  { createBeer: beerActions.createBeer }
)(ListForm)
