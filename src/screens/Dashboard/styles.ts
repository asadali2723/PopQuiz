import {
  colors,
  ConstNumber,
  FontWeight,
  GlobalStyleValues,
  PercentageConstants,
  StyleBase,
} from '@constants';
import {fontPixel, heightPixel, widthPixel} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: ConstNumber.VALUE_1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    ...StyleBase.textAlignCenter,
    backgroundColor: colors.blue.headerBlue,
    marginTop: heightPixel(ConstNumber.VALUE_20),
    fontWeight: FontWeight.FONT_WEIGHT_700,
    fontSize: fontPixel(ConstNumber.VALUE_20),
    letterSpacing: ConstNumber.VALUE_02,
    paddingVertical: heightPixel(ConstNumber.VALUE_10),
    color: colors.white.main,
  },
  moviesList: {
    justifyContent: GlobalStyleValues.SPACE_BETWEEN,
  },
  movieContainer: {
    flex: ConstNumber.VALUE_1,
    margin: ConstNumber.VALUE_8,
    backgroundColor: colors.white.main,
    borderRadius: ConstNumber.VALUE_8,
    shadowColor: colors.black.shadowBlack,
    shadowOffset: {width: ConstNumber.VALUE_0, height: ConstNumber.VALUE_2},
    shadowOpacity: ConstNumber.VALUE_08,
    shadowRadius: ConstNumber.VALUE_2,
    elevation: ConstNumber.VALUE_5,
    overflow: GlobalStyleValues.HIDDEN,
  },
  poster: {
    width: PercentageConstants.PERCENT_100,
    height: heightPixel(ConstNumber.VALUE_200),
    resizeMode: GlobalStyleValues.COVER,
  },
  movieTitle: {
    fontSize: fontPixel(ConstNumber.VALUE_16),
    fontWeight: FontWeight.FONT_WEIGHT_BOLD,
    margin: heightPixel(ConstNumber.VALUE_8),
  },
  movieOverview: {
    fontSize: fontPixel(ConstNumber.VALUE_14),
    color: colors.gray.shadow,
    marginHorizontal: widthPixel(ConstNumber.VALUE_8),
    marginBottom: heightPixel(ConstNumber.VALUE_8),
  },
  movieRating: {
    fontSize: fontPixel(ConstNumber.VALUE_14),
    color: colors.yellow.dark,
    marginHorizontal: ConstNumber.VALUE_8,
    marginBottom: heightPixel(ConstNumber.VALUE_8),
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#007AFF',
  },
});
