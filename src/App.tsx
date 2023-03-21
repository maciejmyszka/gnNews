import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { router } from './routes/Routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
