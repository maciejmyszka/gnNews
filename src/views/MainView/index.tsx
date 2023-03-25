import { useDisclosure } from '@chakra-ui/react';
import { MobileMenu } from '../../layouts/components/MobileMenu';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getArticles } from '../../slices/articlesSlice';
import { AppDispatch } from '../../config/store';
import { countries } from '../../data/countries';
import { MainContainer } from '../../layouts/containers/MainContainer';
import { LeftSideMenu } from '../../layouts/components/LeftSideMenu';
import { ContentContainer } from '../../layouts/containers/ContentContainer';
import { Header } from '../../layouts/components/Header';
import { Content } from '../../layouts/components/Content';

export const MainView = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { name } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const symbol =
      countries.find(
        ({ name: countryName }) => countryName.toLowerCase() === name
      )?.symbol || 'us';

    dispatch(getArticles(symbol));
  }, [name]);

  return (
    <MainContainer>
      <LeftSideMenu onOpen={onOpen} />
      <MobileMenu isOpen={isOpen} onClose={onClose} />

      <ContentContainer>
        <Header onOpen={onOpen} />
        <Content />
      </ContentContainer>
    </MainContainer>
  );
};
