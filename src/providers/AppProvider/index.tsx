import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { LoadingPage } from 'views/LoadingPage';
import { ErrorBoundaryProvider } from 'providers/ErrorBoundaryProvider';
import { router } from 'routes/Routes';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'config/theme';
import { store } from 'config/store';

export const AppProvider = ({ children }: any) => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <ErrorBoundaryProvider>
        <Suspense fallback={<LoadingPage />}>
          <RouterProvider router={router} />
          {children}
        </Suspense>
      </ErrorBoundaryProvider>
    </ChakraProvider>
  </Provider>
);
