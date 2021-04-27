import React from 'react';

import { useTheme } from 'styled-components';

import { Icon } from '~/components';
import { useDrawer } from '~/components/Drawer';
import iconHelper from '~/components/Icon/iconHelper';

import { Container, DrawerButton } from './styles';

const Home: React.FC = () => {
  const { toggleDrawer } = useDrawer();
  const theme = useTheme();

  return (
    <Container>
      <DrawerButton onPress={toggleDrawer}>
        <Icon name={iconHelper.list} color={theme.colors.global.primary} />
      </DrawerButton>
    </Container>
  );
};

export default Home;
