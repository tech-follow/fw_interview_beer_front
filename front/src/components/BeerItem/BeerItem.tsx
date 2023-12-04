import React, { FC, useState } from "react";

import styles from "./BeerItem.module.scss";
import { Rate } from "./Rate/Rate";
import { BeerItemProps } from "./BeerItem.model";
import { RenderCount } from "../RenderCount/RenderCount";

export const BeerItem: FC<BeerItemProps> = ({
  beer: { name, ibu, score, uuid },
}) => {
  const [selectedScore, setSelectedScore] = useState(null);

  const handleRate = (newScore: string) => {
    fetch(`http://localhost:3000/api/beers/${uuid}/rate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ score: newScore }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSelectedScore(newScore);
      })
      .catch((error) => {
        console.error("Erreur lors de la notation de la bière:", error);
      });
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
