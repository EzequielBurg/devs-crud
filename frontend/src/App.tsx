import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { Provider } from 'use-http';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Header } from './components/Header';
import { ListDevs } from './components/ListDevs';
import { UserProvider } from './hooks/devs';

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Provider url={process.env.REACT_APP_BACKEND_URL} options={{}}>
        <UserProvider>
          <Box textAlign="center" top="1.5" fontSize="xl">
            <Grid p={5}>
              <ColorModeSwitcher justifySelf="flex-end" />
              <Header />
              <ListDevs />
            </Grid>
          </Box>
        </UserProvider>
      </Provider>
    </ChakraProvider>
  );
};
