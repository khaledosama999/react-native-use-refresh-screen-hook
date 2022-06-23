import { act, renderHook } from '@testing-library/react-hooks'

import useRefresh from '../index'

describe('use refresh hook', () => {
  test('should update the refresh state', () => {
    const { result } = renderHook(() => useRefresh())

    act(() => {
      result.current[1]()
    })

    expect(result.current[0]).toEqual(1)
  })
})
