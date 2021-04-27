import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding-top: ${Platform.select({
    ios: getStatusBarHeight() + 16,
    android: 16,
  })}px;
  padding-left: 16px;
`;

export const DrawerButton = styled(RectButton)`
  width: 50px;
  height: 50px;

  justify-content: center;
  align-items: center;

  border-radius: 25px;

  background: ${({ theme }) => theme.colors.global.tertiary};

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
  elevation: 2;
`;
