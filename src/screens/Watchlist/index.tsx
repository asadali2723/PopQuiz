import {Movie} from '@_types/movies.type';
import BackIcon from '@components/resuableComponent/backIcon';
import EmptyListComponent from '@components/resuableComponent/emptyListComp';
import {getWatchlistAction} from '@redux/action/ratingAction';
import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';

const Watchlist = () => {
  const dispatch = useDispatch();
  const ratedData = useSelector((state: any) => state.rating);
  const {top} = useSafeAreaInsets();
  React.useEffect(() => {
    dispatch(getWatchlistAction());
  }, [dispatch]);

  const renderItem = ({item}: {item: Movie}) => (
    <View style={styles.card}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`}}
        style={styles.poster}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>Release Date: {item.release_date}</Text>
        <Text style={styles.overview}>{item.overview}</Text>
        <Text style={styles.rating}>Rating: {item.vote_average} / 10</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.main}>
      <BackIcon extraStyle={{marginTop: top}} />
      <Text style={styles.headerTitle}>WatchList Movies</Text>
      <FlatList
        data={ratedData?.watchlist?.results ?? []}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.container}
        ListEmptyComponent={() => (
          <EmptyListComponent title="No Watchlist Movies" />
        )}
      />
    </View>
  );
};

export default Watchlist;
