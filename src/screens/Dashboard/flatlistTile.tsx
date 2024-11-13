import {Image} from 'react-native';
import React from 'react';
import {Movie} from '@_types/movies.type';
import {styles} from './styles';
import {AppText} from '@components/resuableComponent/appText';
import {ConstNumber, RouteName} from '@constants';
import AppPressable from '@components/resuableComponent/appPressable';
import {navigate} from '@services/navigationService';

const FlatListTile = ({item}: {item: Movie}) => {
  return (
    <AppPressable
      style={styles.movieContainer}
      onPress={() => {
        navigate(RouteName.Detail_Screen, {item: item});
      }}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
        style={styles.poster}
      />
      <AppText style={styles.movieTitle}>{item.title}</AppText>
      <AppText style={styles.movieOverview}>
        {item.overview.length > ConstNumber.VALUE_100
          ? item.overview.slice(ConstNumber.VALUE_0, ConstNumber.VALUE_100) +
            '...'
          : item.overview}
      </AppText>
      <AppText style={styles.movieRating}>⭐ {item.vote_average}</AppText>
    </AppPressable>
  );
};

export default React.memo(FlatListTile);
