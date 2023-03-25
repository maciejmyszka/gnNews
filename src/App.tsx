import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { router } from './routes/Routes';
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import i18next from './config/i18next';
import { LangFormatEnum } from './enums/LangFormatEnum';

function App() {
  useEffect(() => {
    i18next.init({
      fallbackLng: [LangFormatEnum.EN, LangFormatEnum.PL],
    });

    const savedLang = localStorage.getItem('lang');

    if (savedLang) {
      i18next.changeLanguage(savedLang);
      return;
    }

    i18next.changeLanguage(LangFormatEnum.EN);
    localStorage.setItem('lang', LangFormatEnum.EN);
    return;
  }, []);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
