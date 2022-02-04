/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getProvince, getCity, getDistrict} from 'utils/master';
import {gender} from 'constants';
import {launchImageLibrary} from 'react-native-image-picker';
import {updateProfile} from 'utils/owner';
import {ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import {storeUserProfile} from 'actions';

const useProfileSetting = navigation => {
  const owner = useSelector(state => state.user.data);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    avatar: owner.avatar ? owner.avatar : null,
    email: owner.email,
    phone: owner.phone,
    full_name: owner.full_name,
  });

  const [genders, setGenders] = useState({
    data: gender,
    selected: owner.gender
      ? {
          name: gender.find(item => item.value === owner.gender).name,
          value: owner.gender,
        }
      : null,
  });
  const [provinces, setProvinces] = useState({
    data: [],
    selected: owner.province ? {name: owner.province} : null,
  });
  const [city, setCity] = useState({
    data: [],
    selected: owner.city ? {name: owner.city} : null,
  });
  const [district, setDistrict] = useState({
    data: [],
    selected: owner.district ? {name: owner.district} : null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    handleGetProvince();
    handleGetCity();
    handleGetDistrict();
  }, [provinces.selected, city.selected, district.selected]);

  const handleUpdateProfile = async () => {
    // setLoading(true);

    // const formData = new FormData();
    // formData.append('avatar', data.avatar);
    // formData.append('email', data.email);
    // formData.append('phone', data.phone);
    // formData.append('full_name', data.full_name);
    // formData.append('gender', genders.selected.value);
    // formData.append('province', provinces.selected.name);
    // formData.append('city', city.selected.name);
    // formData.append('district', district.selected.name);
    // const response = await updateProfile(formData);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const response = await updateProfile(
      {
        avatar: data.avatar,
        email: data.email,
        phone: data.phone,
        full_name: data.full_name,
        gender: genders.selected.value,
        province: provinces.selected.name,
        city: city.selected.name,
        district: district.selected.name,
      },
      config,
    );
    if (response.request.status === 200) {
      console.log(response.data.data);
      ToastAndroid.showWithGravityAndOffset(
        'Data berhasil di update.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      setLoading(false);
      dispatch(storeUserProfile(response.data.data));
      navigation.goBack();
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Ada masalah saat mengupdate profil.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      setLoading(false);
    }
  };

  const handleChooseAvatar = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });
    if (result?.assets) {
      setData({
        ...data,
        avatar: {
          uri: result.assets[0].uri,
          type: result.assets[0].type,
          name: result.assets[0].fileName,
        },
      });
    }
  };

  const handleGetProvince = async () => {
    const response = await getProvince();
    if (response.request.status === 200) {
      setProvinces({...provinces, data: response.data.data});
    }
  };
  const handleGetCity = async () => {
    if (provinces.selected?.id) {
      const response = await getCity(provinces.selected.id);
      if (response.request.status === 200) {
        setCity({...city, data: response.data.data});
      }
    }
  };
  const handleGetDistrict = async () => {
    if (city.selected?.id) {
      const response = await getDistrict(city.selected.id);
      if (response.request.status === 200) {
        setDistrict({...district, data: response.data.data});
      }
    }
  };

  return {
    loading,
    data,
    setData,
    owner,
    provinces,
    city,
    district,
    setProvinces,
    setCity,
    setDistrict,
    genders,
    setGenders,
    handleChooseAvatar,
    handleUpdateProfile,
  };
};

export default useProfileSetting;
