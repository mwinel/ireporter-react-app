import { signupTypes } from '../types';

const initialState = {
  user: {},
  errors: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
  case signupTypes.SIGNUP_SUCCESS:
    return {
      ...state,
      user: action.payload
    };
  default:
    return state;
  }
}
