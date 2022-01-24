import {ACTION_TYPE} from 'constants';

export const storeUserProfile = data => ({
  type: ACTION_TYPE.USER_PROFILE,
  payload: {
    data: data,
  },
});

export const userSignOut = () => ({
  type: ACTION_TYPE.SIGN_OUT,
});
