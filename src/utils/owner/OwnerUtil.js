import {API_URL} from '@env';
import {apiGet, apiPost} from 'constants';

export const getOwnerProfile = () => {
  return null;
};

export const getListTenants = () => {
  return apiGet(`${API_URL}/owner/tenant`);
};

export const updateProfile = (data, config) => {
  return apiPost(`${API_URL}/owner/update-profile`, data, config);
};
