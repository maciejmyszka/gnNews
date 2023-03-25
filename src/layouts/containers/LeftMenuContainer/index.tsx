import { ChildrenProps } from '../../../types/ChildrenProps';
import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

export const LeftMenuContainer = memo(({ children }: ChildrenProps) => (
  <Flex
    width='5%'
    height='100vh'
    bg='rgba(2, 1, 0, 0.93)'
    flexDirection='column'
    alignItems='center'
    pt='1%'
    position='relative'
    display={['none', 'none', 'none', 'flex', 'flex', 'flex']}
  >
    {children}
  </Flex>
));
