import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {ConstNumber, GlobalStyleValues, StyleBase, colors} from '@constants';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/reducer';

const styles = StyleSheet.create({
  container: {
    ...StyleBase.flex1,
    ...StyleBase.absoluteCenterPosition,
    ...StyleBase.inCenter,
    zIndex: ConstNumber.VALUE_100,
    backgroundColor: GlobalStyleValues.TransParent,
  },
});

const Loader = (): React.JSX.Element | null => {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  if (!isLoading) {
    return null;
  }

  return (
    <View style={[styles.container, {bottom: ConstNumber.VALUE_100}]}>
      <ActivityIndicator size={'large'} color={colors.blue.lightBlue} />
    </View>
  );
};

export default React.memo(Loader);
