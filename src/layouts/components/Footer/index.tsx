import { Flex, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { articlesState } from '../../../slices/articlesSlice';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { count } = useSelector(articlesState);
  const { t } = useTranslation();

  const [currentTime, setCurrentTime] = useState<any>(
    moment().format('HH:mm:ss')
  );

  useEffect(() => {
    setTimeout(() => setCurrentTime(moment().format('HH:mm:ss')), 1000);
  });

  return (
    <Flex
      justifyContent='flex-end'
      width='100%'
      gap='1rem'
      mt='1rem'
      alignItems='flex-end'
    >
      <Text color='#FF6900' lineHeight='1'>
        {t('footer.articlesQuantity')} {count}
      </Text>
      <Text color='#FF6900' width='8rem' fontSize='1.7rem' lineHeight='1'>
        {currentTime}
      </Text>
    </Flex>
  );
};
