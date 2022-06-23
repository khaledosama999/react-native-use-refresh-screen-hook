import { useState } from 'react'

const useRefreshComponent = (): [Number, () => void] => {
  const [refreshState, setRefreshState] = useState(0)

  const refresh = () => {
    setRefreshState((oldState) => oldState + 1)
  }

  return [refreshState, refresh]
}

export default useRefreshComponent
