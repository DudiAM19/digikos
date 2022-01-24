import {ACTION_TYPE} from 'constants';

const initialState = {
  userToken: null,
};

export default (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case ACTION_TYPE.SIGN_IN:
      newState.userToken = action.payload.data;
      return newState;
    case ACTION_TYPE.SIGN_OUT:
      newState.userToken = null;
      return newState;
    default:
      return state;
  }
};
