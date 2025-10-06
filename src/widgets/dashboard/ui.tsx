import { Dashboard } from '@features/Dashboard'
import { Flex } from 'antd'

const Ui = () => {
  return (
    <Flex
      className='h-full w-full bg-gray-100'
    >
      <Dashboard />
    </Flex>
  )
}

export { Ui }
