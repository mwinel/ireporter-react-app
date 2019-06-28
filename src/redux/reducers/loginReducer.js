import { loginTypes } from '../types';

const initialState = {
  login: {},
  errors: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
  case loginTypes.LOGIN_SUCCESS:
    return {
      ...state,
      login: action.payload
    };
  default:
    return state;
  }
}
