import React, { ReactElement } from "react";
import { useRenderCount } from "../../customHooks/useRenderCount";

import styles from "./RenderCount.module.scss";

export const RenderCount = (): ReactElement => {
    const renderCount = useRenderCount();

    return (
        <div className={styles.renderCountContainer}>
            <p className={styles.renderCount}>Render count: {renderCount}</p>
        </div>
    );
}