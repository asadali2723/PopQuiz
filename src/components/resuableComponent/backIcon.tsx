import {ViewStyle} from 'react-native';
import React from 'react';
import AppPressable from './appPressable';
import {AppText} from './appText';
import {goBack} from '@services/navigationService';
import {commonStyles} from './styles';

const BackIcon = ({
  extraStyle,
  onPress,
}: {
  extraStyle?: ViewStyle;
  onPress?: () => void;
}) => {
  return (
    <AppPressable
      onPress={onPress ?? goBack}
      style={[commonStyles.backButton, extraStyle]}>
      <AppText style={commonStyles.backText}>‹ Back</AppText>
    </AppPressable>
  );
};

export default BackIcon;
