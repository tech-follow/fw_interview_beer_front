import React, { FC } from "react";

import styles from "./BeerItem.module.scss";
import { Rate } from "./Rate/Rate";
import { BeerItemProps } from "./BeerItem.model";
import { RenderCount } from "../RenderCount/RenderCount";
import { useRateBeer } from "../hooks/useRateBeer";

export const BeerItem: FC<BeerItemProps> = ({
  beer: { name, ibu, score, uuid },
}) => {
  const { rateBeer, selectedScore } = useRateBeer();

  const handleRate = (newScore: string) => {
    rateBeer(uuid, newScore);
  };

  return (
    <>
      <RenderCount currentComponent="BeerItem" childrenName="Rate" />
      <div className={styles.beerItem}>
        <div className={styles.name}>{name}</div>
        <div className={styles.ibu}>IBU: {ibu}</div>
        <div className={styles.score}>Score: {score.toPrecision(1)}</div>
        {selectedScore !== null && (
          <div className={styles.score}>
            <span> Your score : {selectedScore}</span>
          </div>
        )}
        <div className={styles.rate}>
          <Rate onRate={handleRate} />
        </div>
      </div>
    </>
  );
};
