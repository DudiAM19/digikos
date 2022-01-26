import {API_URL} from '@env';
import {apiGet, apiPost} from 'constants';

export const userLogin = data => {
  return apiPost(`${API_URL}/login`, data);
};

export const userRegister = data => {
  return apiPost(`${API_URL}/register`, data);
};

export const getCurrentUser = () => {
  return apiGet(`${API_URL}/owner/current`);
};
