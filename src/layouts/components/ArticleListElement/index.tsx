import { Flex, ListItem, Text } from '@chakra-ui/react';
import { useSingleArticleContext } from '../../../context/SingleArticleContext';
import { useState } from 'react';
import { ArticleModal } from '../ArticleModal';
import moment from 'moment';
import { DateFormatEnum } from '../../../enums/DateFormatEnum';

export const ArticleListElement = () => {
  const { title, publishedAt, source } = useSingleArticleContext();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const date = moment(publishedAt).format(DateFormatEnum.TIME_DATE_FORMAT);

  return (
    <>
      {isModalOpen && (
        <ArticleModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <ListItem
        display='flex'
        width='100%'
        justifyContent='space-between'
        flexDirection={['column', 'column', 'column', 'row', 'row', 'row']}
        p='1rem'
        bg='rgba(8, 5, 4, 0.89)'
        borderRadius='0.5rem'
      >
        <Text
          color='#fff'
          cursor='pointer'
          _hover={{ textDecoration: 'underline' }}
          onClick={() => setIsModalOpen(true)}
        >
          {title}
        </Text>

        <Flex justifyContent='flex-end' mt={['1rem', '1rem', '0']}>
          <Text color='#fff' cursor='default'>
            by <span style={{ color: 'rgba(242, 103, 0)' }}>{source.name}</span>{' '}
            at {date}
          </Text>
        </Flex>
      </ListItem>
    </>
  );
};
