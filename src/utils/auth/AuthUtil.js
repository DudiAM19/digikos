import {API_URL} from '@env';
import {apiGet, apiPost} from 'constants';

export const userLogin = data => {
  return apiPost(`${API_URL}/login`, data);
};
