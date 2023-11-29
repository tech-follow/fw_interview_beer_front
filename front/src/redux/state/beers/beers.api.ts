import axios from 'axios'
import { Beer } from '../../../model/Beer'

export const getBeers = () => axios.get<Array<Beer>>(`/api/beers`)
export const postBeer = (beer: Partial<Beer>) =>
  axios.post<Beer>(`/api/beers`, beer)
export const rateBeer = (beerID: string, rate: Partial<Beer>) =>
  axios.post<Beer>(`/api/beers/${beerID}/rate`, rate)
