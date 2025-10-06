import { memo } from 'react'
import { Empty } from 'antd'

const Local = memo(() => {
  return (
    <Empty
      description="Нет доступных данных"
      style={{ width: '100%', height: '100%', marginTop: '10vh' }}
    />
  )
})

export { Local }
