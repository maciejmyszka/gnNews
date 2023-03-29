import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { appState, setIsList } from 'slices/appSlice';
import { TilesIcon } from 'icons/TilesIcon';
import { ListIcon } from 'icons/ListIcon';

export const MobileChangeView = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isList } = useSelector(appState);

  return (
    <Flex alignItems='center' justifyContent='space-between'>
      <Text>{t('header.changeNewsView')}</Text>

      <Flex gap='0.5rem'>
        <IconButton
          aria-label='tiles'
          onClick={() => dispatch(setIsList(false))}
          bg={!isList ? 'main' : 'light'}
          _hover={{ bg: 'auto' }}
        >
          <TilesIcon />
        </IconButton>

        <IconButton
          aria-label='list'
          onClick={() => dispatch(setIsList(true))}
          bg={isList ? 'main' : 'light'}
          _hover={{ bg: 'auto' }}
        >
          <ListIcon />
        </IconButton>
      </Flex>
    </Flex>
  );
};
