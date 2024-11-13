import {View, Text} from 'react-native';
import React from 'react';
import {errorTexts} from '@constants';
import {commonStyles} from './styles';

const EmptyListComponent = ({title}: {title?: string}) => (
  <View style={commonStyles.emptyContainer}>
    <Text style={commonStyles.emptyText}>{title ?? errorTexts.noData}</Text>
  </View>
);

export default React.memo(EmptyListComponent);
