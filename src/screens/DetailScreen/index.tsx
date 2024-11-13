import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Movie} from '@_types/movies.type';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToWatchlist,
  deleteRating,
  getRatedMovies,
  postRating,
} from '@redux/action/ratingAction';
import {showMessage} from 'react-native-flash-message';
import {popUpType} from '@constants';
import {AppText} from '@components/resuableComponent/appText';
import BackIcon from '@components/resuableComponent/backIcon';
import {styles} from './styles';

const DetailScreen = ({route}: any) => {
  const {top} = useSafeAreaInsets();
  const {item}: {item: Movie} = route.params;
  const [rating, setRating] = useState<string>('');
  const [isRatingPosted, setIsRatingPosted] = useState<boolean>(false);
  const dispatch = useDispatch();
  const ratedData = useSelector((state: any) => state.rating);
  const isMovieRated = ratedData?.ratedMovies?.results?.some(
    (ratedMovie: Movie) => ratedMovie.id === item.id,
  );
  React.useEffect(() => {
    setIsRatingPosted(isMovieRated ? true : false);
  }, [isMovieRated, ratedData?.ratedMovies]);
  React.useEffect(() => {
    dispatch(getRatedMovies());
  }, [dispatch]);

  const postRatingPress = async () => {
    if (rating === '') {
      showMessage({
        message: 'Please enter a rating.',
        type: popUpType.danger,
      });
    }
    if (Number(rating) > 10) {
      showMessage({
        message: 'Rating should be less than 10.',
        type: popUpType.danger,
      });
    } else {
      dispatch(postRating(item.id, Number(rating)));
    }
  };

  const deleteRatingPress = async () => {
    dispatch(deleteRating(item.id));
  };

  const addToWatchlistPress = async () => {
    dispatch(addToWatchlist(item.id));
  };

  return (
    <ScrollView style={[styles.container, {marginTop: top}]}>
      <View style={styles.headerView}>
        <BackIcon />
        <TouchableOpacity
          style={styles.watchlistButton}
          onPress={addToWatchlistPress}
          disabled={ratedData?.isLoading}>
          <Text style={styles.buttonText}>Add to Watchlist</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
        style={styles.poster}
      />
      {!isRatingPosted ? (
        <View style={styles.ratingInputContainer}>
          <TextInput
            style={styles.ratingInput}
            value={rating}
            maxLength={2}
            onChangeText={setRating}
            placeholder="Rate this movie"
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={postRatingPress}
            disabled={ratedData?.isLoading}>
            <AppText style={styles.buttonText}>Post Rating</AppText>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.ratingStatus}>
          <AppText style={styles.ratingStatusText}>
            You have rated this movie
          </AppText>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={deleteRatingPress}
            disabled={ratedData?.isLoading}>
            <AppText style={styles.buttonText}>Delete Rating</AppText>
          </TouchableOpacity>
        </View>
      )}
      <AppText style={styles.title}>{item.title}</AppText>
      <AppText style={styles.overview}>{item.overview}</AppText>
      <View style={styles.ratingContainer}>
        <AppText style={styles.ratingTitle}>Rating:</AppText>
        <AppText style={styles.averageRating}>⭐ {item.vote_average}</AppText>
      </View>
      <AppText style={styles.releaseDate}>
        Release Date: {item.release_date}
      </AppText>
    </ScrollView>
  );
};

export default DetailScreen;
