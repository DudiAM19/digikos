import {useState, useEffect} from 'react';
import {userLogin} from 'utils/auth';

const useLogin = navigation => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [credentials, setCredentials] = useState({
    phone: '',
    password: '',
    fcm_token: '',
  });

  const handleUserLogin = async () => {
    setLoading(true);
    setError({});
    if (validation()) {
      setLoading(false);
      return;
    }

    // const response = await userLogin(credentials);
    // if (response.request.status === 200) {
    //   // login successfully
    // }
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
