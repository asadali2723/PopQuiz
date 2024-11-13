import React from 'react';
import {
  View,
  TextInput,
  KeyboardType,
  ViewStyle,
  TextStyle,
  ReturnKeyTypeOptions,
} from 'react-native';
import {Controller} from 'react-hook-form';
import {AppText} from './appText';
import {commonStyles} from './styles';
import {
  colors,
  ConstNumber,
  GlobalStyleValues,
  KEYBOARD_TYPE,
  StyleBase,
} from '@constants';

type inputProps = {
  placeholder: string;
  fieldName: string;
  control: any;
  keyboardType?: KeyboardType;
  maxLength?: number;
  isSecure?: boolean;
  multiline?: boolean;
  error?: string;
  customInputStyle?: ViewStyle;
  customTextStyle?: TextStyle;
  onBlurInput?: () => void;
  onfocus?: () => void;
  returnKeyType?: ReturnKeyTypeOptions;
  forwardedRef?: React.Ref<TextInput>;
  borderDark?: boolean;
  onSubmitEditing?: () => void;
};

const PrimaryInput = (props: inputProps): React.JSX.Element => {
  const {
    placeholder,
    keyboardType,
    maxLength,
    isSecure,
    control,
    fieldName,
    error,
    onBlurInput,
    onfocus,
    multiline = false,
    customInputStyle,
    customTextStyle,
    returnKeyType,
    forwardedRef,
    borderDark,
    onSubmitEditing,
  } = props;
  const [focusedField, setFocusedField] = React.useState<boolean>(false);

  let borderColor = error ? colors.red.fieldError : colors.white.border;

  if (focusedField && borderDark && !error) {
    borderColor = colors.black.main;
  }

  return (
    <>
      <View
        style={[
          commonStyles.inputContainer,
          {borderColor},
          StyleBase.inRowSpacing,
          customInputStyle,
        ]}>
        <Controller
          control={control}
          render={({field: {onChange, value, onBlur}}) => {
            return (
              <>
                <TextInput
                  ref={forwardedRef}
                  value={value}
                  underlineColorAndroid={colors.transparent}
                  placeholder={placeholder}
                  selectionColor={colors.black[ConstNumber.VALUE_1]}
                  placeholderTextColor={colors.gray.placeholder}
                  keyboardType={keyboardType ?? KEYBOARD_TYPE.Default}
                  maxLength={maxLength}
                  multiline={multiline}
                  onChangeText={onChange}
                  returnKeyType={returnKeyType}
                  onBlur={() => {
                    setFocusedField(false);
                    onBlur();
                    if (onBlurInput) {
                      onBlurInput();
                    }
                  }}
                  onFocus={() => {
                    onfocus?.();
                    setFocusedField(true);
                  }}
                  autoCorrect={false}
                  autoCapitalize={GlobalStyleValues.NONE}
                  secureTextEntry={isSecure}
                  style={[commonStyles.inputStyle, customTextStyle]}
                  onSubmitEditing={onSubmitEditing}
                />
              </>
            );
          }}
          name={fieldName}
          rules={{required: true}}
        />
      </View>
      <AppText style={commonStyles.fieldError}>{error}</AppText>
    </>
  );
};

export default React.memo(PrimaryInput);
