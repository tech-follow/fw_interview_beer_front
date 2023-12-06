import React, { useRef, useEffect } from "react";

import sytles from "./RenderCount.module.scss";

export const RenderCount = ({
  currentComponent,
  childrenName,
}: {
  currentComponent: string;
  childrenName: string;
}) => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div className={sytles.title}>
      {`${childrenName} component re-renders in ${currentComponent} component: ${renderCount.current}`}
    </div>
  );
};
