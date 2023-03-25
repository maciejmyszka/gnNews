import { Flex, IconButton, Text } from '@chakra-ui/react';
import { langs } from '../../../data/langs';
import { changeLang } from '../../../utils/changeLang';
import { useTranslation } from 'react-i18next';

export const MobileChangeLang = () => {
  const { t } = useTranslation();

  return (
    <Flex alignItems='center' justifyContent='space-between'>
      <Text>{t('header.changeLanguage')}</Text>

      <Flex gap='0.5rem'>
        {langs.map(({ id, label, format, icon }) => (
          <IconButton
            key={id}
            aria-label={label}
            bg='transparent'
            _hover={{ bg: 'transparent' }}
            onClick={() => changeLang(format)}
          >
            {icon}
          </IconButton>
        ))}
      </Flex>
    </Flex>
  );
};
