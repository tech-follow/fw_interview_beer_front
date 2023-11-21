import React from "react";

import { rateItemsMap } from "./Rate.constants";
import styles from "./Rate.module.scss";

export const Rate = ({ onRate }) => (
  <div className={styles.rate}>
      {Object.keys(rateItemsMap).map((rateItemKey) => (
          <div className={rateItemsMap[rateItemKey].className} key={rateItemKey} onClick={() => onRate(rateItemsMap[rateItemKey].rate)} />
          )
      )}
  </div>
);
