import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { Provider } from 'use-http';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Header } from './components/Header';
import { ListDevs } from './components/ListDevs';

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Provider url="http://192.168.99.100:3333" options={{}}>
        <Box textAlign="center" top="1.5" fontSize="xl">
          <Grid p={5}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <Header />
            <ListDevs />
          </Grid>
        </Box>
      </Provider>
    </ChakraProvider>
  );
};
