import { Flex } from 'antd'

import { Content } from './content'


export const AppLayout = () => {
  return (
    <Flex className="h-screen w-screen flex justify-center items-center" >
         <Content />
    </Flex>
  )
}
