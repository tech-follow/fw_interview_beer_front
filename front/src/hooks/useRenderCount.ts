import { useRef } from "react"

const useRenderCount = () => {
  const renderCount = useRef(0)
  return (renderCount.current += 1)
}

export default useRenderCount
