import React from 'react';
import { createIconSet } from 'react-native-vector-icons';

import { useTheme } from 'styled-components';

import awesomeicons from './assets/awesomeicons.json';

export interface IIconProps {
  name: string;
  size?: number;
  color?: string;
}

const RNIcon = createIconSet(awesomeicons, 'awesomeicons', 'awesomeicons.ttf');

const Icon: React.FC<IIconProps> = ({ name, size, color }) => {
  const theme = useTheme();

  return (
    <RNIcon
      name={name}
      size={size || 30}
      color={color || theme.colors.global.primary}
    />
  );
};

export default Icon;
