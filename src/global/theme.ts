import { fontSizePercentage } from '~/utils';

const white = '#FFFFFF';
const governorBay = '#4e37b2';
const bittersweet = '#f77a58';

export default {
  colors: {
    global: {
      primary: white,
      secondary: governorBay,
      tertiary: bittersweet,
    },
  },

  font: {
    size: (size: number): number => fontSizePercentage(size),
    family: {
      black: 'Rubik-Black',
      blackItalic: 'Rubik-BlackItalic',
      bold: 'Rubik-Bold',
      boldItalic: 'Rubik-BoldItalic',
      extraBold: 'Rubik-ExtraBold',
      extraBoldItalic: 'Rubik-ExtraBoldItalic',
      italic: 'Rubik-Italic',
      light: 'Rubik-Light',
      lightItalic: 'Rubik-LightItalic',
      medium: 'Rubik-Medium',
      mediumItalic: 'Rubik-MediumItalic',
      regular: 'Rubik-Regular',
      semiBold: 'Rubik-SemiBold',
      semiBoldItalic: 'Rubik-SemiBoldItalic',
    },
  },
};
