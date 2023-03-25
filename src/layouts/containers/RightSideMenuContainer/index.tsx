import { Flex } from '@chakra-ui/react';
import { ChildrenProps } from '../../../types/ChildrenProps';
import { memo } from 'react';

export const RightSideMenuContainer = memo(({ children }: ChildrenProps) => (
  <Flex
    gap='1rem'
    alignItems='center'
    bg='rgba(8, 5, 4, 0.89)'
    p='10px 10px 10px 25px'
    borderRadius='0.5rem'
  >
    {children}
  </Flex>
));
