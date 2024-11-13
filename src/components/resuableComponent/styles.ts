import {
  colors,
  ConstNumber,
  FontWeight,
  GlobalStyleValues,
  PercentageConstants,
  StyleBase,
} from '@constants';
import {
  fontPixel,
  heightPixel,
  SCREEN_WIDTH,
  widthPixel,
} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  mainContainer: {
    width: SCREEN_WIDTH - widthPixel(ConstNumber.VALUE_60),
    marginVertical: heightPixel(ConstNumber.VALUE_7),
  },

  inputHstack: {
    ...StyleBase.alignCenter,
    width: SCREEN_WIDTH - widthPixel(ConstNumber.VALUE_100),
  },
  inputContainer: {
    borderWidth: ConstNumber.VALUE_1,
    borderRadius: heightPixel(ConstNumber.VALUE_16),
    borderColor: colors.white.border,
    paddingVertical: heightPixel(ConstNumber.VALUE_16),
    paddingHorizontal: widthPixel(ConstNumber.VALUE_16),
    backgroundColor: colors.white.main,
  },
  input: {
    fontSize: fontPixel(ConstNumber.VALUE_14),
    color: colors.black.main,
  },
  fieldError: {
    fontSize: fontPixel(ConstNumber.VALUE_14),
    color: colors.red.fieldError,
    marginVertical: heightPixel(ConstNumber.VALUE_8),
    marginRight: widthPixel(ConstNumber.VALUE_8),
    textAlign: GlobalStyleValues.LEFT,
  },
  inputStyle: {
    color: colors.black.main,
    fontSize: fontPixel(ConstNumber.VALUE_17),
    paddingVertical: ConstNumber.VALUE_0,
    width: PercentageConstants.PERCENT_100,
  },
  backButton: {
    flexDirection: GlobalStyleValues.ROW,
    alignItems: GlobalStyleValues.CENTER,
    marginBottom: heightPixel(ConstNumber.VALUE_10),
    padding: heightPixel(ConstNumber.VALUE_10),
  },
  backText: {
    fontSize: fontPixel(ConstNumber.VALUE_18),
    fontWeight: FontWeight.FONT_WEIGHT_BOLD,
    color: colors.blue.dark,
    paddingLeft: widthPixel(ConstNumber.VALUE_5),
  },
  emptyContainer: {
    flex: ConstNumber.VALUE_1,
    justifyContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
    paddingVertical: heightPixel(ConstNumber.VALUE_20),
  },
  emptyText: {
    fontSize: fontPixel(ConstNumber.VALUE_16),
    color: colors.gray.empty,
    textAlign: GlobalStyleValues.CENTER,
  },
});
