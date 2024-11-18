import React from 'react';
import {ActivityIndicator, StyleSheet, View, ViewStyle} from 'react-native';
import {ConstNumber, GlobalStyleValues, StyleBase, colors} from '@constants';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/reducer';

type LoaderProps = {
  size?: 'small' | 'large';
  color?: string;
  style?: ViewStyle;
  enable?: boolean;
};

const styles = StyleSheet.create({
  container: {
    ...StyleBase.flex1,
    ...StyleBase.absoluteCenterPosition,
    ...StyleBase.inCenter,
    zIndex: ConstNumber.VALUE_100,
    backgroundColor: GlobalStyleValues.TransParent,
  },
});

const Loader = ({
  size = 'large',
  color = colors.blue.lightBlue,
  style,
  enable = false,
}: LoaderProps): React.JSX.Element | null => {
  const isLoading = enable
    ? true
    : useSelector((state: RootState) => state.loading.isLoading);

  if (!isLoading) {
    return null;
  }

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default React.memo(Loader);
