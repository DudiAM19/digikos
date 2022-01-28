/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getProvince, getCity, getDistrict} from 'utils/master';

const useProfileSetting = navigation => {
  const owner = useSelector(state => state.user.data);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [region, setRegion] = useState({
    province: {
      data: [],
      selected: null,
    },
    city: {
      data: [],
      selected: null,
    },
    district: {
      data: [],
      selected: null,
    },
  });

  useEffect(() => {
    handleGetProvince();
    handleGetCity();
    handleGetDistrict();
  }, [
    region.province.selected?.id,
    region.city.selected?.id,
    region.district.selected?.id,
  ]);

  const handleGetProvince = async () => {
    const response = await getProvince();
    if (response.request.status === 200) {
      setRegion({
        ...region,
        province: {data: response.data.data, selected: null},
      });
    }
  };
  const handleGetCity = async () => {
    if (region.province.selected?.id) {
      const response = await getCity(region.province.selected.id);
      if (response.request.status === 200) {
        setRegion({
          ...region,
          city: {data: response.data.data, selected: null},
        });
      }
    }
  };
  const handleGetDistrict = async () => {
    if (region.city.selected?.id) {
      const response = await getDistrict(region.city.selected.id);
      if (response.request.status === 200) {
        setRegion({
          ...region,
          district: {data: response.data.data, selected: null},
        });
      }
    }
  };

  return {
    loading,
    data,
    owner,
    region,
    setRegion,
  };
};

export default useProfileSetting;
