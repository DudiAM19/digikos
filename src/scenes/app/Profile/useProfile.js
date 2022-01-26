import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {useDispatch} from 'react-redux';
import {signOut} from 'actions';

const useProfile = navigation => {
  const userData = useSelector(state => state.user.data);
  const dispatch = useDispatch();

  const handleUserLogout = async () => {
    await AsyncStorage.clear();
    dispatch(signOut());
    await messaging().deleteToken();
  };

  return {
    userData,
    handleUserLogout,
  };
};
export default useProfile;
