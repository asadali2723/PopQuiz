import {ConstNumber} from '@constants';
import {Dimensions, PixelRatio} from 'react-native';

// Get screen dimensions
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

// Base scale for width and height
const widthBaseScale = SCREEN_WIDTH / ConstNumber.VALUE_414;
const heightBaseScale = SCREEN_HEIGHT / ConstNumber.VALUE_896;

// Normalize function to adjust sizes based on width or height
export const normalizer = (
  size: number,
  based: 'width' | 'height' = 'width',
): number => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Function for normalizing width-based size
export const widthPixel = (size: number): number => normalizer(size, 'width');

// Function for normalizing height-based size
export const heightPixel = (size: number): number => normalizer(size, 'height');

// Function for normalizing font size based on height
export const fontPixel = (size: number): number => heightPixel(size);

// Layout object for fixed margin
export const LAYOUT = {
  horizontalMargin: normalizer(ConstNumber.VALUE_24, 'width'),
};
