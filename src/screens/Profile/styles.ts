import {colors, ConstNumber, FontWeight, GlobalStyleValues} from '@constants';
import {fontPixel, heightPixel, widthPixel} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: ConstNumber.VALUE_1,
    padding: heightPixel(ConstNumber.VALUE_20),
  },
  profileSection: {
    alignItems: GlobalStyleValues.CENTER,
    marginBottom: heightPixel(ConstNumber.VALUE_30),
  },
  avatar: {
    width: widthPixel(ConstNumber.VALUE_120),
    height: widthPixel(ConstNumber.VALUE_120),
    borderRadius: heightPixel(ConstNumber.VALUE_60),
    marginBottom: heightPixel(ConstNumber.VALUE_10),
  },
  name: {
    fontSize: fontPixel(ConstNumber.VALUE_22),
    fontWeight: FontWeight.FONT_WEIGHT_BOLD,
    marginBottom: heightPixel(ConstNumber.VALUE_5),
  },
  username: {
    fontSize: fontPixel(ConstNumber.VALUE_18),
    color: colors.gray._888,
    marginBottom: heightPixel(ConstNumber.VALUE_10),
  },
  text: {
    fontSize: fontPixel(ConstNumber.VALUE_16),
    color: colors.gray.shadow,
    marginBottom: heightPixel(ConstNumber.VALUE_5),
  },
  errorText: {
    color: colors.red.fieldError,
    fontSize: fontPixel(ConstNumber.VALUE_16),
    textAlign: GlobalStyleValues.CENTER,
  },
  logoutButtonContainer: {
    marginBottom: heightPixel(ConstNumber.VALUE_20),
  },
  center: {
    flex: ConstNumber.VALUE_1,
    justifyContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
  },
});
