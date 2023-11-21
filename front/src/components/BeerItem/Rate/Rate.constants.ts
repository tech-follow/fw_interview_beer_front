import { RateEnum } from "./Rate.enum";
import styles from "./Rate.module.scss";

export type RateItemTypes = {
    rate: number;
    className: string;
}

export const rateItemsMap: Record<RateEnum, RateItemTypes> = {
    [RateEnum.SAD]: {
        className: styles.sad,
        rate: 1
    },
    [RateEnum.HAPPY]: {
        className: styles.happy,
        rate: 5
    },
    [RateEnum.IN_LOVE]: {
        className: styles.inLove,
        rate: 10
    }
} as const