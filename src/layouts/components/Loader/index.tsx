import { Button, Flex } from '@chakra-ui/react';

export const Loader = () => {
  return (
    <Flex width='100%' justifyContent='center'>
      <Button isLoading bg='transparent' color='#fff'></Button>
    </Flex>
  );
};
