import axios from 'axios'
import { Beer } from '../../../model/Beer'

export const getBeers = () => axios.get<Array<Beer>>(`/api/beers`)
export const postBeer = (beer: Beer) => axios.post<Beer>(`/api/beers`, beer)
export const rateBeer = ({ uuidBeer, rate }: { uuidBeer: Beer["uuid"]; rate: number }) => axios.post<Beer>(`/api/beers/${uuidBeer}/rate`, {
    score: rate
})

