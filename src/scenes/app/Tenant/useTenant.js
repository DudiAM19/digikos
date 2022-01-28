import {useState, useEffect} from 'react';
import {getListTenants} from 'utils/owner';

const useTenant = navigation => {
  const [loading, setLoading] = useState(true);
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const response = await getListTenants();
      if (response.request.status === 200) {
        setTenants(response.data);
        setLoading(false);
      } else {
        setLoading(false);
        alert('Oops, Terjadi kesalah saat mengambil data');
      }
    });
    return unsubscribe;
  }, [navigation]);

  return {
    loading,
    tenants,
  };
};

export default useTenant;
