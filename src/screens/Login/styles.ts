import {colors, ConstNumber, FontWeight, StyleBase} from '@constants';
import {fontPixel, heightPixel, widthPixel} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: ConstNumber.VALUE_1,
    backgroundColor: colors.blue.headerBlue,
  },
  loginText: {
    ...StyleBase.textAlignCenter,
    backgroundColor: colors.blue.headerBlue,
    marginTop: heightPixel(ConstNumber.VALUE_20),
    fontWeight: FontWeight.FONT_WEIGHT_700,
    fontSize: fontPixel(ConstNumber.VALUE_20),
    letterSpacing: ConstNumber.VALUE_02,
    paddingVertical: heightPixel(ConstNumber.VALUE_10),
    color: colors.white.main,
  },
  loginFieldView: {
    marginTop: heightPixel(ConstNumber.VALUE_40),
    marginHorizontal: heightPixel(ConstNumber.VALUE_20),
  },
  loginBtn: {
    ...StyleBase.inCenter,
    borderRadius: ConstNumber.VALUE_10,
    borderWidth: ConstNumber.VALUE_1,
    borderColor: colors.gray.placeholder,
    paddingVertical: heightPixel(ConstNumber.VALUE_15),
    marginTop: heightPixel(ConstNumber.VALUE_40),
    marginHorizontal: heightPixel(ConstNumber.VALUE_40),
  },
  loginBtnText: {
    fontWeight: FontWeight.FONT_WEIGHT_700,
    fontSize: fontPixel(ConstNumber.VALUE_12),
  },
  innerView: {
    backgroundColor: colors.white.main,
    marginHorizontal: widthPixel(ConstNumber.VALUE_20),
    paddingVertical: heightPixel(ConstNumber.VALUE_40),
    borderRadius: widthPixel(ConstNumber.VALUE_30),
    marginTop: heightPixel(ConstNumber.VALUE_100),
    shadowColor: colors.black[ConstNumber.VALUE_1],
    shadowOffset: {width: ConstNumber.VALUE_0, height: ConstNumber.VALUE_6},
    shadowOpacity: ConstNumber.VALUE_0_5,
    shadowRadius: ConstNumber.VALUE_10,
  },
});
