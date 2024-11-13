import React from 'react';
import AppPressable from '@components/resuableComponent/appPressable';
import {LoginContext} from '@context/loginContext';
import {styles} from './styles';
import {AppText} from '@components/resuableComponent/appText';

const LoginBtn = () => {
  const {handleSubmit, onSubmit} = React.useContext(LoginContext);
  return (
    <AppPressable style={styles.loginBtn} onPress={handleSubmit(onSubmit)}>
      <AppText style={styles.loginBtnText}>Login</AppText>
    </AppPressable>
  );
};

export default LoginBtn;
