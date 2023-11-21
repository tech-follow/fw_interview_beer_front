import React, { FC } from "react";
import { useDispatch } from "react-redux";

import styles from "./BeerItem.module.scss";
import { Rate } from "./Rate/Rate";
import { BeerItemProps } from "./BeerItem.model";
import {beerActions, BeerActionTypes} from "../../redux/state/beers";

export const BeerItem: FC<BeerItemProps> = ({ beer: { uuid, name, ibu, score } }) => {
    const dispatch = useDispatch();
    const handleRate = (rate: number) => {
        dispatch(beerActions.rateBear(uuid, rate))
    }

    return (
        <div className={styles.beerItem}>
            <div className={styles.name}>{name}</div>
            <div className={styles.ibu}>IBU: {ibu}</div>
            <div className={styles.score}>Score: {score.toPrecision(1)}</div>
            <div className={styles.rate}>
                <Rate onRate={handleRate} />
            </div>
        </div>
    );
}
