import { IconButton, Text } from '@chakra-ui/react';
import { appState, setIsList } from '../../../slices/appSlice';
import { TilesIcon } from '../../../icons/TilesIcon';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ListIcon } from '../../../icons/ListIcon';

export const ViewMenuSection = () => {
  const { t } = useTranslation();
  const { isList } = useSelector(appState);
  const dispatch = useDispatch();

  return (
    <>
      <Text
        cursor='default'
        color='#fff'
        display={['none', 'none', 'none', 'block', 'block', 'block']}
      >
        {t('header.changeNewsView')}
      </Text>

      <IconButton
        aria-label='tiles'
        onClick={() => dispatch(setIsList(false))}
        bg={!isList ? '#FF6900' : '#D4D4D4'}
        _hover={{ bg: 'auto' }}
      >
        <TilesIcon />
      </IconButton>

      <IconButton
        aria-label='list'
        onClick={() => dispatch(setIsList(true))}
        bg={isList ? '#FF6900' : '#D4D4D4'}
        _hover={{ bg: 'auto' }}
      >
        <ListIcon />
      </IconButton>
    </>
  );
};
