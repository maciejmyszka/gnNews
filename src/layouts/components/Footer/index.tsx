import { Flex, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { articlesState } from 'slices/articlesSlice';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DateFormatEnum } from 'enums/DateFormatEnum';
import { useMoment } from 'hooks/useMoment';

export const Footer = () => {
  const { count } = useSelector(articlesState);
  const { t } = useTranslation();

  const initialTime = useMoment(DateFormatEnum.TIME_FORMAT);
  const [currentTime, setCurrentTime] = useState<string>(initialTime);

  useEffect(() => {
    const timeId = setTimeout(
      () => setCurrentTime(useMoment(DateFormatEnum.TIME_FORMAT)),
      1000
    );
    return () => {
      clearInterval(timeId);
    };
  });

  return (
    <Flex
      justifyContent='flex-end'
      width='100%'
      gap='1rem'
      mt='1rem'
      alignItems='flex-end'
    >
      <Text color='main' lineHeight='1'>
        {t('footer.articlesQuantity')} {count}
      </Text>

      <Text color='main' width='8rem' fontSize='1.7rem' lineHeight='1'>
        {currentTime}
      </Text>
    </Flex>
  );
};
