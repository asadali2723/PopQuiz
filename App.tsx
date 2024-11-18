import {View, StatusBar} from 'react-native';
import React from 'react';
import {ConstNumber, GlobalStyleValues} from '@constants';
import MainStack from './src/navigation/index';
import {Provider} from 'react-redux';
import {store} from '@redux/store';
import Loader from '@components/loader';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <View style={{flex: ConstNumber.VALUE_1}}>
      <Provider store={store}>
        <StatusBar
          translucent
          backgroundColor={GlobalStyleValues.TransParent}
          barStyle={GlobalStyleValues.LIGTH_CONTENT}
        />
        <Loader />
        <FlashMessage position={GlobalStyleValues.TOP} />
        <MainStack />
      </Provider>
    </View>
  );
};

export default App;
// export {default} from './.storybook';
