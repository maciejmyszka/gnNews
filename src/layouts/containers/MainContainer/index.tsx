import { Flex } from '@chakra-ui/react';
import { ChildrenProps } from '../../../types/ChildrenProps';

export const MainContainer = ({ children }: ChildrenProps) => (
  <Flex width='100vw' height='100vh' position='relative'>
    {children}
  </Flex>
);
