import React, { FC } from "react";
import { useDispatch } from "react-redux";

import { beerActions } from "../../redux/state/beers/beers.actions";
import { BeerItemProps } from "./BeerItem.model";
import { Rate } from "./Rate/Rate";
import { RenderCount } from "../RenderCount/RenderCount";
import styles from "./BeerItem.module.scss";

export const BeerItem: FC<BeerItemProps> = ({
  beer: { name, ibu, score, uuid },
}) => {
  const dispatch = useDispatch();

  const handleRate = (newScore) => {
    dispatch(beerActions.rateBeer(uuid, newScore));
  };

  return (
    <>
      <RenderCount currentComponent="BeerItem" childrenName="Rate" />
      <div className={styles.beerItem}>
        <div className={styles.name}>{name}</div>
        <div className={styles.ibu}>IBU: {ibu}</div>
        <div className={styles.score}>Score: {score.toPrecision(1)}</div>
        <div className={styles.rate}>
          <Rate onRate={handleRate} />
        </div>
      </div>
    </>
  );
};
