import { Flex } from 'antd';
import { Content } from './content';

export const AppLayout = () => {
  return (
    <Flex
      className="h-screen w-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
      }}
    >
        <Content />
    </Flex>
  );
};