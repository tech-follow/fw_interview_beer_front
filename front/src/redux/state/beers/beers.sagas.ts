import { put, call, takeEvery, select } from 'redux-saga/effects'
import history from '../../../history'
import { getBeers, postBeer } from './beers.api'
import { beerActions } from './beers.actions'
import { BeerActionTypes } from './beers.model'
import { beerItemsSelector } from './beers.selectors'

function* fetchBeersIfNotWorker() {
  const items = yield select(beerItemsSelector)
  if (items.length === 0) {
    yield put(beerActions.fetchBeers())
  }
}

export function* fetchBeersIfNotWatcher() {
  yield takeEvery(BeerActionTypes.BEERS_FETCH_IF_NOT, fetchBeersIfNotWorker)
}

function* fetchBeersWorker() {
  try {
    const { data } = yield call(getBeers)
    yield put(beerActions.setBeers(data))
    yield put(beerActions.fetchBeersSuccess())
  } catch (e) {
    yield put(beerActions.setBeers([]))
    yield put(beerActions.fetchBeersFailure())
  }
}

export function* fetchBeersWatcher() {
  yield takeEvery(BeerActionTypes.BEERS_FETCH, fetchBeersWorker)
}

function* createBeersWorker({ beer }: ReturnType<typeof beerActions.createBeer>) {
  try {
    const { data } = yield call(postBeer, beer)
    history.push('/')
    yield put(beerActions.setNewlyCreatedBeer(data))
    yield put(beerActions.fetchBeersSuccess())
  } catch (e) {
    yield put(beerActions.fetchBeersFailure())
  }
}

export function* createBeersWatcher() {
  yield takeEvery(BeerActionTypes.BEERS_CREATE, createBeersWorker)
}
