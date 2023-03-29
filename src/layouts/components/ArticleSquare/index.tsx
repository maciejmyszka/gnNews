import { Flex, GridItem, Image, Text, useDisclosure } from '@chakra-ui/react';
import { ArticleModal } from 'layouts/components/ArticleModal';
import { useSingleArticleContext } from 'context/SingleArticleContext';
import { DateFormatEnum } from 'enums/DateFormatEnum';
import { useMoment } from 'hooks/useMoment';

export const ArticleSquare = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { urlToImage, title, publishedAt } = useSingleArticleContext();

  const date = useMoment(DateFormatEnum.TIME_DATE_FORMAT, publishedAt);

  return (
    <>
      {isOpen && <ArticleModal isOpen={isOpen} onClose={onClose} />}

      <GridItem
        flexDirection='column'
        display='flex'
        borderRadius='0.5rem'
        p='0.6rem'
        bg='lightGray'
        boxShadow=' -3px 2px 18px -5px rgba(66, 68, 90, 1)'
      >
        <Image
          src={urlToImage ?? 'https://placehold.co/600x400'}
          alt='Article photo'
          loading='lazy'
          borderRadius='0.5rem'
          cursor='pointer'
          onClick={onOpen}
        />
        <Text
          mt='0.5rem'
          color='white'
          cursor='pointer'
          _hover={{ textDecoration: 'underline' }}
          onClick={onOpen}
        >
          {title}
        </Text>

        <Flex justifyContent='flex-end' mb='0.5rem' color='main'>
          <Text cursor='default'>{date}</Text>
        </Flex>
      </GridItem>
    </>
  );
};
