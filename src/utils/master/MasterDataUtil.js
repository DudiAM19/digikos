import {API_URL} from '@env';
import {apiGet} from 'constants';

export const getSubscriptions = () => {
  return apiGet(`${API_URL}/master/subscriptions`);
};
