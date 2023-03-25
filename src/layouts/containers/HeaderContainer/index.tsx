import { memo } from 'react';
import { ChildrenProps } from '../../../types/ChildrenProps';
import { Flex } from '@chakra-ui/react';

export const HeaderContainer = memo(({ children }: ChildrenProps) => (
  <Flex
    h='8%'
    w='100%'
    alignItems='center'
    justifyContent='space-between'
    px='2%'
    gap='1rem'
    flexWrap='wrap'
  >
    {children}
  </Flex>
));
