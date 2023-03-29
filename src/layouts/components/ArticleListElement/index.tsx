import { useState } from 'react';
import { Flex, ListItem, Text } from '@chakra-ui/react';
import { useSingleArticleContext } from 'context/SingleArticleContext';
import { ArticleModal } from 'layouts/components/ArticleModal';
import { DateFormatEnum } from 'enums/DateFormatEnum';
import { useMoment } from 'hooks/useMoment';
import { useTranslation } from 'react-i18next';

export const ArticleListElement = () => {
  const { title, publishedAt, source } = useSingleArticleContext();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const date = useMoment(DateFormatEnum.TIME_DATE_FORMAT, publishedAt);

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
        bg='lightGray'
        borderRadius='0.5rem'
      >
        <Text
          color='white'
          cursor='pointer'
          _hover={{ textDecoration: 'underline' }}
          onClick={() => setIsModalOpen(true)}
        >
          {title}
        </Text>

        <Flex justifyContent='flex-end' mt={['1rem', '1rem', '0']}>
          <Text color='white' cursor='default'>
            {t('content.by')}{' '}
            <span style={{ color: '#FF6900' }}>{source.name}</span>{' '}
            {t('content.at')} <span style={{ color: '#FF6900' }}>{date}</span>
          </Text>
        </Flex>
      </ListItem>
    </>
  );
};
