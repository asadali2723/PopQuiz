import React, {useState} from 'react';
import {
  ImageSourcePropType,
  ViewStyle,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import FastImage, {ImageStyle, ResizeMode} from 'react-native-fast-image';
import {
  colors,
  PercentageConstants,
  GlobalStyleValues,
  StyleBase,
} from '@constants';
import AppPressable from './appPressable';

export interface IAppImage {
  source: ImageSourcePropType;
  style?: ViewStyle;
  imgStyle?: ImageStyle;
  resizeMode?: ResizeMode;
  onPress?: () => void;
  tintColor?: string;
}
const styles = StyleSheet.create({
  imageStyle: {
    width: PercentageConstants.PERCENT_100,
    height: PercentageConstants.PERCENT_100,
  },
  loaderStyle: {
    ...StyleBase.absoluteCenterPosition,
  },
});
const AppImage = (props: IAppImage) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <AppPressable
      disabled={!props?.onPress}
      onPress={props?.onPress}
      style={props.style}>
      <FastImage
        source={props.source as never}
        style={[styles.imageStyle, props.imgStyle]}
        resizeMode={props.resizeMode ?? FastImage.resizeMode.contain}
        onLoad={() => setIsLoading(false)}
        tintColor={props?.tintColor}
      />
      {isLoading && props?.source && (
        <ActivityIndicator
          size={GlobalStyleValues.SMALL}
          color={colors.blue.lightBlue}
          style={styles.loaderStyle}
        />
      )}
    </AppPressable>
  );
};

export default React.memo(AppImage);
