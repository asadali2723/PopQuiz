import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {colors, RouteName, SCREENS, STORAGE_KEY} from '@constants';
import {RootStackParamList} from '@_types/navigation.type';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@services/navigationService';
import {getDataLocally} from '@utils/helperFunction';
import {ActivityIndicator} from 'react-native';

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = (): React.JSX.Element => {
  const [initialScreen, setInitialScreen] = React.useState<
    keyof RootStackParamList | null
  >(null);

  React.useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const isLogin = await getDataLocally(STORAGE_KEY.isLogin);
        if (isLogin) {
          setInitialScreen(RouteName.Dashboard_Screen);
        } else {
          setInitialScreen(RouteName.Login_Screen);
        }
      } catch (error) {
        setInitialScreen(RouteName.Login_Screen);
      }
    };
    checkLoginStatus();
  }, []);
  const RenderNavigationScreens = React.useMemo((): React.JSX.Element[] => {
    return Object.keys(SCREENS).map((item: string) => (
      <Stack.Screen
        key={`Screen-${item}`}
        //@ts-ignore
        name={item}
        //@ts-ignore
        component={SCREENS[item]}
      />
    ));
  }, []);

  if (!initialScreen) {
    return (
      <>
        <ActivityIndicator size={'large'} color={colors.blue.lightBlue} />
      </>
    );
  }
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={initialScreen}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        {RenderNavigationScreens}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(MainStack);
