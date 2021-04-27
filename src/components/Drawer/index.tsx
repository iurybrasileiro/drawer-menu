import React, { createContext, useCallback, useContext, useMemo } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import Icon from '../Icon';
import iconHelper from '../Icon/iconHelper';
import { Header } from './components';
import {
  Container,
  Content,
  Dismiss,
  DrawerContainer,
  DrawerContent,
  MenuItem,
  MenuItemText,
  DrawerTitle,
} from './styles';

const { width: WIDTH } = Dimensions.get('window');

interface IDrawerContext {
  isOpened: boolean;
  toggleDrawer: () => void;
}

const DrawerContext = createContext<IDrawerContext>({} as IDrawerContext);

export const useDrawer = (): IDrawerContext => {
  const context = useContext(DrawerContext);

  if (!context)
    throw new Error('The useDrawer must be used within Drawerprovider');

  return context;
};

const Drawer: React.FC = ({ children }) => {
  const animation = useSharedValue(0);

  const toggleDrawer = useCallback(() => {
    if (animation.value) {
      animation.value = withTiming(0, { duration: 400 });
      StatusBar.setBarStyle('dark-content');
    } else {
      StatusBar.setBarStyle('light-content');
      animation.value = withTiming(1, { duration: 400 });
    }
  }, [animation]);

  const drawerContainerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          animation.value,
          [0, 1],
          [-WIDTH, 0],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  const contentStyle = useAnimatedStyle(() => ({
    borderRadius: interpolate(
      animation.value,
      [0, 0.2],
      [0, 16],
      Extrapolate.CLAMP,
    ),
    transform: [
      {
        translateX: interpolate(
          animation.value,
          [0, 1],
          [0, 250],
          Extrapolate.CLAMP,
        ),
      },
      {
        scale: interpolate(
          animation.value,
          [0, 1],
          [1, 0.8],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  const menuItens = useMemo(
    () => [
      {
        label: 'My Wallet',
        icon: {
          name: iconHelper.wallet,
          size: 35,
        },
      },
      {
        label: 'Delivery',
        icon: {
          name: iconHelper.bicycle,
          size: 35,
        },
      },
      {
        label: 'Shopping Cart',
        icon: {
          name: iconHelper.handbag,
          size: 35,
        },
      },
      {
        label: 'Receipt',
        icon: {
          name: iconHelper.newspaperClipping,
          size: 35,
        },
      },
      {
        label: 'My Information',
        icon: {
          name: iconHelper.identificationCard,
          size: 35,
        },
      },
      {
        label: 'Locale Store',
        icon: {
          name: iconHelper.storefront,
          size: 35,
        },
      },
      {
        label: 'Protections',
        icon: {
          name: iconHelper.shieldCheck,
          size: 35,
        },
      },
      {
        label: 'Customer Support',
        icon: {
          name: iconHelper.headset,
          size: 35,
        },
      },
    ],
    [],
  );

  return (
    <Container>
      <DrawerContainer style={drawerContainerStyle}>
        <DrawerContent>
          <DrawerTitle>Main Menus</DrawerTitle>
          {menuItens.map((item, index) => (
            <MenuItem key={String(index)}>
              <Icon {...item.icon} />
              <MenuItemText style={{ color: 'white' }} key={String(index)}>
                {item.label}
              </MenuItemText>
            </MenuItem>
          ))}
        </DrawerContent>
        <Dismiss onPress={toggleDrawer} />
      </DrawerContainer>
      <DrawerContext.Provider value={{ isOpened: !!animation, toggleDrawer }}>
        <Content style={contentStyle}>{children}</Content>
      </DrawerContext.Provider>
    </Container>
  );
};

export default Drawer;
