import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { router } from './routes/Routes';
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import i18next from './config/i18next';

function App() {
  useEffect(() => {
    i18next.init({
      fallbackLng: ['en-US', 'pl-PL'],
    });

    const savedLang = localStorage.getItem('lang');

    if (savedLang) {
      i18next.changeLanguage(savedLang);
      return;
    }

    i18next.changeLanguage('en-US');
    localStorage.setItem('lang', 'en-US');
    return;
  }, []);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
