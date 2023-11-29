import React from "react"
import useRenderCount from "../../hooks/useRenderCount"

export const RenderCount = () => {
  const renderCount = useRenderCount()

  return <p>Rendered {renderCount} times</p>
}
