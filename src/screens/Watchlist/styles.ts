import {
  colors,
  ConstNumber,
  FontWeight,
  GlobalStyleValues,
  StyleBase,
} from '@constants';
import {fontPixel, heightPixel, widthPixel} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: ConstNumber.VALUE_10,
  },
  headerTitle: {
    textAlign: GlobalStyleValues.CENTER,
    fontSize: fontPixel(ConstNumber.VALUE_20),
    fontWeight: FontWeight.FONT_WEIGHT_BOLD,
    color: colors.gray.dark,
  },
  main: {
    flex: ConstNumber.VALUE_1,
    backgroundColor: colors.white.cream_white,
  },
  card: {
    ...StyleBase.inRow,
    marginVertical: heightPixel(ConstNumber.VALUE_10),
    padding: heightPixel(ConstNumber.VALUE_10),
    backgroundColor: colors.white.snow,
    borderRadius: widthPixel(ConstNumber.VALUE_8),
    elevation: ConstNumber.VALUE_3,
  },
  poster: {
    width: widthPixel(ConstNumber.VALUE_100),
    height: heightPixel(ConstNumber.VALUE_150),
    borderRadius: widthPixel(ConstNumber.VALUE_8),
  },
  details: {
    flex: ConstNumber.VALUE_1,
    paddingLeft: widthPixel(ConstNumber.VALUE_15),
    justifyContent: GlobalStyleValues.CENTER,
  },
  title: {
    fontSize: fontPixel(ConstNumber.VALUE_18),
    fontWeight: FontWeight.FONT_WEIGHT_BOLD,
    marginBottom: heightPixel(ConstNumber.VALUE_5),
  },
  date: {
    fontSize: fontPixel(ConstNumber.VALUE_14),
    color: colors.gray.empty,
    marginBottom: heightPixel(ConstNumber.VALUE_5),
  },
  overview: {
    fontSize: heightPixel(ConstNumber.VALUE_14),
    color: colors.black.light,
    marginBottom: heightPixel(ConstNumber.VALUE_5),
  },
  rating: {
    fontSize: heightPixel(ConstNumber.VALUE_14),
    color: colors.green.main,
    fontWeight: FontWeight.FONT_WEIGHT_BOLD,
  },
});
