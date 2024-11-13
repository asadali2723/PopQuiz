import {View} from 'react-native';
import React from 'react';
import PrimaryInput from '@components/resuableComponent/primaryInput';
import {fieldsName, RETURN_KEY_TYPE, texts} from '@constants';
import {LoginContext} from '@context/loginContext';
import {styles} from './styles';

const LoginFields = () => {
  const {control, handleSubmit, errors, onSubmit} =
    React.useContext(LoginContext);
  return (
    <View style={styles.loginFieldView}>
      <PrimaryInput
        fieldName={fieldsName.username}
        control={control}
        placeholder={texts.username}
        error={errors[fieldsName.username]?.message ?? undefined}
      />
      <PrimaryInput
        fieldName={fieldsName.password}
        control={control}
        isSecure
        placeholder={texts.passowrd}
        error={errors[fieldsName.password]?.message ?? undefined}
        returnKeyType={RETURN_KEY_TYPE.Done}
        onSubmitEditing={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default LoginFields;
