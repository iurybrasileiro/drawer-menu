import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';

import { Drawer } from './components';
import theme from './global/theme';
import Home from './screens/Home';

const Main: React.FC = () => (
  <ThemeProvider theme={theme}>
    <StatusBar
      backgroundColor={theme.colors.global.primary}
      barStyle="dark-content"
    />
    <Drawer>
      <Home />
    </Drawer>
  </ThemeProvider>
);

export default Main;
