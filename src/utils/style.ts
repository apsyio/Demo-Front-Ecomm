import {Dimensions} from 'react-native';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');
const {height: Height} = Dimensions.get('screen');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 720;
const screenSize = Math.sqrt(deviceWidth * deviceHeight) / 100;

const scale = (size: number) => (deviceWidth / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (Height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const scaleSpace = (size: number) =>
  `${((size / deviceHeight) * 100).toFixed(2)}%`;

export {
  deviceHeight,
  deviceWidth,
  moderateScale,
  scale,
  scaleSpace,
  screenSize,
  verticalScale,
};
