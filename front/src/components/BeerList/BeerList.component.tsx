import React, { FC } from "react";
import { BeerItem } from "../BeerItem";
import { Loader } from "../Loader";
import { RenderCount } from "../RenderCount";

import styles from "./BeerList.module.scss";
import { BeerListProps } from "./BeerList";

export const BeerList: FC<BeerListProps> = ({ beers, loading }) => {
    return (
        <div className={styles.Beerlist}>
            <RenderCount />
            {!loading && beers.map(beer => <BeerItem key={beer.uuid} beer={beer} />)}
            {loading && <Loader />}
        </div>
    );
}
