import 'react-native-gesture-handler';

import React from 'react';

import { ThemeProvider } from 'styled-components';

import { Drawer } from './components';
import theme from './global/theme';
import Home from './screens/Home';

const Main: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Drawer>
      <Home />
    </Drawer>
  </ThemeProvider>
);

export default Main;
