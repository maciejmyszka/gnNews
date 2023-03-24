import {
  Button,
  Flex,
  Heading,
  IconButton,
  Popover,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { TilesIcon } from '../../../icons/TilesIcon';
import { ListIcon } from '../../../icons/ListIcon';
import { useNavigate } from 'react-router-dom';
import { Popup } from '../Popup';
import { PolandIcon } from '../../../icons/PolandIcon';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { LangPicker } from '../LangPicker';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { EnglishIcon } from '../../../icons/EnglishIcon';

export const Header = ({ isList, setIsList }: any) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Flex
      h='8%'
      w='100%'
      alignItems='center'
      justifyContent='space-between'
      px='2%'
      gap='1rem'
    >
      <Flex gap='1rem' alignItems='center'>
        {/*<HamburgerIcon*/}
        {/*  style={{*/}
        {/*    fontSize: '25px',*/}
        {/*    cursor: 'pointer',*/}
        {/*    color: '#FF6900',*/}
        {/*  }}*/}
        {/*  onClick={onOpen}*/}
        {/*/>*/}

        <Flex
          position='relative'
          flexDirection='column'
          cursor='pointer'
          onClick={() => navigate('/')}
        >
          <Heading
            color='#FF6900'
            style={{
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            gnNews
          </Heading>

          <Text color='#fff' marginTop='-10px' marginLeft='30px'>
            Best news page
          </Text>
        </Flex>
      </Flex>

      <Flex
        gap='1rem'
        alignItems='center'
        bg='rgba(8, 5, 4, 0.89)'
        p='10px 10px 10px 25px'
        borderRadius='0.5rem'
      >
        <Text cursor='default' color='#fff'>
          {t('header.changeNewsView')}
        </Text>

        <IconButton
          aria-label='tiles'
          onClick={() => setIsList(false)}
          bg={!isList ? '#FF6900' : '#D4D4D4'}
          _hover={{ bg: 'auto' }}
        >
          <TilesIcon />
        </IconButton>

        <IconButton
          aria-label='list'
          onClick={() => setIsList(true)}
          bg={isList ? '#FF6900' : '#D4D4D4'}
          _hover={{ bg: 'auto' }}
        >
          <ListIcon />
        </IconButton>

        <Popover>
          <PopoverTrigger>
            <Button ml='2rem' bg='#D4D4D4'>
              {t('header.openPopUp')}
            </Button>
          </PopoverTrigger>

          <Popup />
        </Popover>

        <Text cursor='default' color='#fff'>
          {t('header.changeLanguage')}
        </Text>

        <Popover>
          <PopoverTrigger>
            <Button
              bg='#2B2929'
              display='flex'
              gap='0.5rem'
              _hover={{ bg: '#2B2929' }}
            >
              {i18n.language === 'pl-PL' ? <PolandIcon /> : <EnglishIcon />}
              <ChevronDownIcon color='#fff' />
            </Button>
          </PopoverTrigger>

          <LangPicker />
        </Popover>
      </Flex>
    </Flex>
  );
};
