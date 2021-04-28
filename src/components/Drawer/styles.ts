import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  background: ${({ theme }) => theme.colors.global.secondary};
`;

export const DrawerContainer = styled(Animated.View)`
  width: 100%;
  height: 100%;

  flex-direction: row;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const DrawerContent = styled.View`
  flex: 1;

  margin: ${Platform.select({
    ios: `${getStatusBarHeight() + 16}px 0px ${getBottomSpace() + 16}px 8px`,
    android: `16px 0px 16px 8px`,
  })};

  justify-content: center;
`;

export const Dismiss = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
`;

export const Content = styled(Animated.View)`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.global.primary};
`;

export const DrawerTitle = styled.Text`
  font-size: ${({ theme }) => theme.font.size(24)}px;
  color: ${({ theme }) => theme.colors.global.primary};
  margin-bottom: 32px;
  margin-left: 8px;
`;

export const MenuItem = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  border-radius: 4px;

  padding: 16px 8px;
  margin-bottom: 8px;
`;

export const MenuItemText = styled.Text`
  margin-left: 8px;
  font-size: ${({ theme }) => theme.font.size(18)}px;
  color: ${({ theme }) => theme.colors.global.primary};
`;
