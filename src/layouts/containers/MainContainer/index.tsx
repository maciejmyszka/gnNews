import { memo } from 'react';
import { Flex } from '@chakra-ui/react';
import { ChildrenProps } from 'types/ChildrenProps';

export const MainContainer = memo(({ children }: ChildrenProps) => (
  <Flex width='100vw' height='100vh' position='relative'>
    {children}
  </Flex>
));
