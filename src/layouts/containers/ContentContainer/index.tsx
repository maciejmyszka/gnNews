import { ChildrenProps } from '../../../types/ChildrenProps';
import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

export const ContentContainer = memo(({ children }: ChildrenProps) => (
  <Flex
    flexDirection='column'
    width={['100%', '100%', '100%', '95%', '95%', '95%']}
    bg='rgba(8, 5, 4, 0.89)'
  >
    {children}
  </Flex>
));
