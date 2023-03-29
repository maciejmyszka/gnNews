import { memo } from 'react';
import { Flex } from '@chakra-ui/react';
import { ChildrenProps } from 'types/ChildrenProps';

export const ContentWrapper = memo(({ children }: ChildrenProps) => {
  return (
    <Flex
      w='100%'
      height='92%'
      flexDirection='column'
      px='2%'
      py='1rem'
      gap='1rem'
      overflowY='scroll'
    >
      {children}
    </Flex>
  );
});
