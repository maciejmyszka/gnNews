import { memo } from 'react';
import { Flex } from '@chakra-ui/react';
import { ChildrenProps } from 'types/ChildrenProps';

export const ContentContainer = memo(({ children }: ChildrenProps) => (
  <Flex
    flexDirection='column'
    width={['100%', '100%', '100%', '95%', '95%', '95%']}
    bg='lightGray'
  >
    {children}
  </Flex>
));
