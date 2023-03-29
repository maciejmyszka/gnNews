import { memo } from 'react';
import { Flex } from '@chakra-ui/react';
import { ChildrenProps } from 'types/ChildrenProps';

export const LeftMenuContainer = memo(({ children }: ChildrenProps) => (
  <Flex
    width='5%'
    height='100vh'
    bg='dark'
    flexDirection='column'
    alignItems='center'
    pt='1%'
    position='relative'
    display={['none', 'none', 'none', 'flex', 'flex', 'flex']}
  >
    {children}
  </Flex>
));
