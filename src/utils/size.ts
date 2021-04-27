import { Dimensions, PixelRatio } from 'react-native';

const widthPercentageToDP = (widthPercent: string): number => {
  const screenWidth = Dimensions.get('window').width;
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
const heightPercentageToDP = (heightPercent: string): number => {
  const screenHeight = Dimensions.get('window').height;
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};
const fontSizePercentage = (fontSize: number): number => {
  const screenWidth = Dimensions.get('window').width;
  if (screenWidth <= 400 && screenWidth >= 350) {
    return Math.round(fontSize * 0.85);
  }
  if (screenWidth <= 350 && screenWidth >= 300) {
    return Math.round(fontSize * 0.65);
  }
  return fontSize;
};
export { widthPercentageToDP, heightPercentageToDP, fontSizePercentage };
