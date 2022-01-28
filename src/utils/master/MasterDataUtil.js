import {API_URL} from '@env';
import {apiGet} from 'constants';

export const getSubscriptions = () => {
  return apiGet(`${API_URL}/master/subscriptions`);
};

export const getProvince = () => {
  return apiGet(`${API_URL}/master/province`);
};
export const getCity = provinceId => {
  return apiGet(`${API_URL}/master/city?province_id=${provinceId}`);
};
export const getDistrict = cityId => {
  return apiGet(`${API_URL}/master/district?city_id=${cityId}`);
};
