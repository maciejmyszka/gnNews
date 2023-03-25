import { Flex, GridItem, Image, Text } from '@chakra-ui/react';
import { ArticleModal } from '../ArticleModal';
import { useState } from 'react';
import { useSingleArticleContext } from '../../../context/SingleArticleContext';
import moment from 'moment/moment';
import { DateFormatEnum } from '../../../enums/DateFormatEnum';

export const ArticleSquare = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { urlToImage, title, publishedAt } = useSingleArticleContext();

  const date = moment(publishedAt).format(DateFormatEnum.TIME_DATE_FORMAT);

  return (
    <>
      {isModalOpen && (
        <ArticleModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <GridItem
        flexDirection='column'
        display='flex'
        borderRadius='0.5rem'
        p='0.6rem'
        bg='rgba(8, 5, 4, 0.89)'
        boxShadow=' -3px 2px 18px -5px rgba(66, 68, 90, 1)'
      >
        <Image
          src={urlToImage ?? 'https://placehold.co/600x400'}
          alt='Article photo'
          loading='lazy'
          borderRadius='0.5rem'
          cursor='pointer'
          onClick={() => setIsModalOpen(true)}
        />
        <Text
          mt='0.5rem'
          color='#fff'
          cursor='pointer'
          _hover={{ textDecoration: 'underline' }}
          onClick={() => setIsModalOpen(true)}
        >
          {title}
        </Text>

        <Flex justifyContent='flex-end' mb='0.5rem' color='#FF6900'>
          <Text cursor='default'>{date}</Text>
        </Flex>
      </GridItem>
    </>
  );
};
