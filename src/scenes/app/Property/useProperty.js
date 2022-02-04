import {useState, useEffect} from 'react';
import {getListProperty} from 'utils/owner';

const useProperty = navigation => {
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const response = await getListProperty();
      if (response.request.status === 200) {
        setLoading(false);
        setProperty(response.data.data);
      } else {
        alert('error');
        setLoading(false);
      }
    });
    return unsubscribe;
  }, [navigation]);

  return {
    loading,
    selected,
    property,
  };
};

export default useProperty;
