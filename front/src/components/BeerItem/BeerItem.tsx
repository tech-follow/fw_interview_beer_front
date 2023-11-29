import React, { FC, useCallback } from "react"
import { useDispatch } from "react-redux"

import styles from "./BeerItem.module.scss"
import { Rate } from "./Rate/Rate"
import { BeerItemProps } from "./BeerItem.model"
import { beerActions } from "../../redux/state/beers"

export const BeerItem: FC<BeerItemProps> = ({ beer: { name, ibu, score, uuid }}) => {
  const dispatch = useDispatch()

  const handleRate = useCallback(
    (rate: number) => () => {
      dispatch(beerActions.rateBeer(uuid, { score: rate }))
    },
    [dispatch, uuid]
  )

  return (
    <div className={styles.beerItem}>
      <div className={styles.name}>{name}</div>
      <div className={styles.ibu}>IBU: {ibu}</div>
      <div className={styles.score}>Score: {score.toPrecision(3)}</div>
      <div className={styles.rate}>
        <Rate onRate={handleRate} />
      </div>
    </div>
  )
};
