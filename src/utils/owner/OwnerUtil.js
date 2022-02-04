import {API_URL} from '@env';
import {apiGet, apiPost} from 'constants';

export const getOwnerProfile = () => {
  return null;
};

export const getListTenants = () => {
  return apiGet(`${API_URL}/owner/tenant`);
};

export const getListProperty = () => {
  return apiGet(`${API_URL}/owner/property`);
};
