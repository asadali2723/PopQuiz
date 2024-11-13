import {
  colors,
  ConstNumber,
  FontWeight,
  GlobalStyleValues,
  PercentageConstants,
} from '@constants';
import {fontPixel, heightPixel, widthPixel} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: ConstNumber.VALUE_1,
    padding: heightPixel(ConstNumber.VALUE_16),
    backgroundColor: colors.white.main,
  },
  headerView: {
    flexDirection: GlobalStyleValues.ROW,
    justifyContent: GlobalStyleValues.SPACE_BETWEEN,
  },
  poster: {
    width: PercentageConstants.PERCENT_100,
    height: heightPixel(ConstNumber.VALUE_300),
    borderRadius: widthPixel(ConstNumber.VALUE_10),
    marginBottom: heightPixel(ConstNumber.VALUE_16),
  },
  title: {
    fontSize: fontPixel(ConstNumber.VALUE_24),
    fontWeight: FontWeight.FONT_WEIGHT_BOLD,
    marginBottom: heightPixel(ConstNumber.VALUE_8),
  },
  overview: {
    fontSize: heightPixel(ConstNumber.VALUE_16),
    marginBottom: heightPixel(ConstNumber.VALUE_16),
    color: colors.gray.shadow,
  },
  releaseDate: {
    fontSize: fontPixel(ConstNumber.VALUE_14),
    color: colors.gray._888,
    marginBottom: heightPixel(ConstNumber.VALUE_50),
  },
  ratingContainer: {
    marginBottom: heightPixel(ConstNumber.VALUE_16),
  },
  ratingTitle: {
    fontSize: fontPixel(ConstNumber.VALUE_18),
    fontWeight: FontWeight.FONT_WEIGHT_BOLD,
    marginBottom: heightPixel(ConstNumber.VALUE_8),
  },
  averageRating: {
    fontSize: fontPixel(16),
    marginBottom: heightPixel(ConstNumber.VALUE_16),
    color: colors.yellow.pendingColor,
  },
  ratingInputContainer: {
    flexDirection: GlobalStyleValues.ROW,
    alignItems: GlobalStyleValues.CENTER,
  },
  ratingInput: {
    height: heightPixel(ConstNumber.VALUE_40),
    borderWidth: ConstNumber.VALUE_1,
    borderColor: colors.white._ccc,
    borderRadius: widthPixel(ConstNumber.VALUE_5),
    paddingHorizontal: widthPixel(ConstNumber.VALUE_8),
    fontSize: fontPixel(16),
    flex: ConstNumber.VALUE_1,
    marginRight: ConstNumber.VALUE_8,
  },
  submitButton: {
    backgroundColor: colors.blue.dark,
    borderRadius: ConstNumber.VALUE_5,
    paddingVertical: heightPixel(ConstNumber.VALUE_10),
    paddingHorizontal: widthPixel(ConstNumber.VALUE_20),
  },
  ratingStatus: {
    marginTop: heightPixel(ConstNumber.VALUE_16),
    alignItems: GlobalStyleValues.CENTER,
  },
  ratingStatusText: {
    fontSize: fontPixel(ConstNumber.VALUE_16),
    marginBottom: heightPixel(ConstNumber.VALUE_8),
    color: colors.gray._888,
  },
  deleteButton: {
    backgroundColor: colors.red.light,
    borderRadius: heightPixel(ConstNumber.VALUE_5),
    paddingVertical: heightPixel(ConstNumber.VALUE_10),
    paddingHorizontal: widthPixel(ConstNumber.VALUE_20),
  },
  watchlistButton: {
    backgroundColor: colors.green.main,
    borderRadius: widthPixel(ConstNumber.VALUE_5),
    paddingVertical: heightPixel(ConstNumber.VALUE_8),
    paddingHorizontal: widthPixel(ConstNumber.VALUE_10),
    marginBottom: heightPixel(ConstNumber.VALUE_16),
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white.main,
    fontSize: fontPixel(ConstNumber.VALUE_16),
    fontWeight: FontWeight.FONT_WEIGHT_BOLD,
  },
});
