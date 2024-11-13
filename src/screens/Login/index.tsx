import {StatusBar, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppText} from '@components/resuableComponent/appText';
import LoginFields from './loginFields';
import {styles} from './styles';
import {LoginProvider} from '@context/loginContext';
import {KeyboardScrollView} from '@components/layout/keyboardScrollView';
import LoginBtn from './loginBtn';
import {colors, GlobalStyleValues} from '@constants';

const Login = () => {
  const {top} = useSafeAreaInsets();
  return (
    <LoginProvider>
      <StatusBar
        translucent
        backgroundColor={GlobalStyleValues.TransParent}
        barStyle={GlobalStyleValues.LIGTH_CONTENT}
      />
      <View style={[styles.main]}>
        <AppText style={[styles.loginText, {marginTop: top}]}>
          Login to your Account
        </AppText>
        <KeyboardScrollView
          extraStyle={{backgroundColor: colors.blue.lightBlue}}>
          <View style={styles.innerView}>
            <LoginFields />
            <LoginBtn />
          </View>
        </KeyboardScrollView>
      </View>
    </LoginProvider>
  );
};

export default Login;
