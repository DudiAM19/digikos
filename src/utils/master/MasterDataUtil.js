import {API_URL} from '@env';
import {apiGet, apiPost} from 'constants';

export const getSubscriptions = () => {
  return apiGet(`${API_URL}/master/subscriptions`);
};
