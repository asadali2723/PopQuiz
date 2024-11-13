import React, {useEffect} from 'react';
import {View, Text, Button, Image, ScrollView, StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getProfile, logout} from '@redux/action/authActions'; // Update with your import path
import {RootState} from '@redux/reducer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BackIcon from '@components/resuableComponent/backIcon';
import {GlobalStyleValues} from '@constants';
import {styles} from './styles';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const {top} = useSafeAreaInsets();
  const {profile} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, {marginTop: top}]}>
      <StatusBar
        translucent
        backgroundColor={GlobalStyleValues.TransParent}
        barStyle={GlobalStyleValues.DARK_CONTENT}
      />
      <BackIcon />
      <View style={styles.profileSection}>
        {profile?.avatar?.gravatar?.hash && (
          <Image
            source={{
              uri: `https://www.gravatar.com/avatar/${profile.avatar.gravatar.hash}`,
            }}
            style={styles.avatar}
          />
        )}
        <Text style={styles.name}>{profile?.name}</Text>
        <Text style={styles.username}>@{profile?.username}</Text>
        <Text style={styles.text}>ID: {profile?.id}</Text>
        <Text style={styles.text}>Language: {profile?.iso_639_1}</Text>
        <Text style={styles.text}>Country: {profile?.iso_3166_1}</Text>
        <Text style={styles.text}>
          Adult Content: {profile?.include_adult ? 'Yes' : 'No'}
        </Text>
      </View>
      <View style={styles.logoutButtonContainer}>
        <Button title="Logout" onPress={handleLogout} color="#d9534f" />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
