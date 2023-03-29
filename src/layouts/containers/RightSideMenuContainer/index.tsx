import { memo } from 'react';
import { Flex } from '@chakra-ui/react';
import { ChildrenProps } from 'types/ChildrenProps';

export const RightSideMenuContainer = memo(({ children }: ChildrenProps) => (
  <Flex
    gap='1rem'
    alignItems='center'
    bg='lightGray'
    p='10px 10px 10px 25px'
    borderRadius='0.5rem'
  >
    {children}
  </Flex>
));
