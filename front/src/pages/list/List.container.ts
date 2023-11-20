import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { beerActions, allBeersSelector } from '../../redux/state/beers'
import { List } from './List.component'
import { StoreState } from '../../redux'

const connectList = connect(
  (state: StoreState) => {
    return {
      loading: state.beers.loading,
      beers: allBeersSelector(state),
    }
  },
  { fetchBeersIfNot: beerActions.fetchBeersIfNot }
)

const withDidMountList = lifecycle({
  componentDidMount() {
    this.props.fetchBeersIfNot()
  },
})

export default compose(connectList, withDidMountList)(List)
