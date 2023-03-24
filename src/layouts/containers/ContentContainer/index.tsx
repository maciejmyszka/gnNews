import { ChildrenProps } from '../../../types/ChildrenProps';
import { Flex } from '@chakra-ui/react';

export const ContentContainer = ({ children }: ChildrenProps) => (
  <Flex flexDirection='column' width='95%' bg='rgba(8, 5, 4, 0.89)'>
    {children}
  </Flex>
);
