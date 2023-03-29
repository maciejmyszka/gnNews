import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { IconButton, Text } from '@chakra-ui/react';
import { appState, setIsList } from 'slices/appSlice';
import { TilesIcon } from 'icons/TilesIcon';
import { ListIcon } from 'icons/ListIcon';

export const ViewMenuSection = () => {
  const { t } = useTranslation();
  const { isList } = useSelector(appState);
  const dispatch = useDispatch();

  return (
    <>
      <Text
        cursor='default'
        color='white'
        display={['none', 'none', 'none', 'block', 'block', 'block']}
      >
        {t('header.changeNewsView')}
      </Text>

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
    </>
  );
};
