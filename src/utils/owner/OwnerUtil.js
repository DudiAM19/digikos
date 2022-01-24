import {API_URL} from '@env';
import {apiGet, apiPost} from 'constants';

export const getCurrentUser = () => {
  return apiGet(`${API_URL}/owner/current`);
};
