import React from 'react';
import { View } from 'react-native';

import { ThemeProvider } from 'styled-components';

import theme from './global/theme';

const Main: React.FC = () => (
  <ThemeProvider theme={theme}>
    <View />
  </ThemeProvider>
);

export default Main;
