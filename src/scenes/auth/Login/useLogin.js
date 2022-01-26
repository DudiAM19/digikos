/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {userLogin} from 'utils/auth';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {storeUserProfile, signIn} from 'actions';

const useLogin = navigation => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [credentials, setCredentials] = useState({
    phone: '',
    password: '',
    fcm_token: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      setCredentials({...credentials, fcm_token: token});
    })();
  }, []);

  const handleUserLogin = async () => {
    setLoading(true);
    setError({});
    if (validation()) {
      setLoading(false);
      return;
    }
    const response = await userLogin(credentials);
    if (response.request.status === 200) {
      await AsyncStorage.setItem('userToken', response.data.data.access_token);
      dispatch(storeUserProfile(response.data.data.userdata));
      dispatch(signIn(response.data.data.access_token));
    } else if (response.request.status === 400) {
      if (response.response.data?.phone) {
        setError({phone: response.response.data.phone});
      } else if (response.response.data?.password) {
        setError({password: response.response.data.phone});
      }
    }
    setLoading(false);
  };

  const validation = () => {
    if (credentials.phone === '' && credentials.password === '') {
      setError({
        phone: 'No.Telepon atau Kode Kamar tidak boleh kosong',
        password: 'Password tidak boleh kosong',
      });
      return true;
    } else if (credentials.phone === '') {
      setError({phone: 'No.Telepon atau Kode Kamar tidak boleh kosong'});
      return true;
    } else if (credentials.password === '') {
      setError({password: 'Password tidak boleh kosong'});
      return true;
    } else {
      return false;
    }
  };

  return {
    loading,
    credentials,
    setCredentials,
    handleUserLogin,
    error,
  };
};

export default useLogin;
