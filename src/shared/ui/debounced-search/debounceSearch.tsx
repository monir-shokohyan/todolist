import { memo, useCallback, useRef } from 'react'
import { Input } from 'antd'

const DebounceSearch = memo(
  ({
    trigger,
    filterOption,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    trigger: (params: any) => void
    filterOption: string
  }) => {
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const debouncedSearch = useCallback(
      (value: string) => {
        if (timerRef.current) clearTimeout(timerRef.current)

        timerRef.current = setTimeout(() => {
          trigger({ PageSize: 1000, [filterOption]: value })
        }, 500)
      },
      [trigger, filterOption],
    )

    return (
      <Input
        placeholder="Поиск..."
        onChange={(e) => debouncedSearch(e.target.value)}
        style={{ width: 250 }}
      />
    )
  },
)

export { DebounceSearch }
