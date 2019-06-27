import { signupTypes } from '../types';
import { signupUrl } from '../../urls';

const signUp = userData => dispatch => {
  return fetch(signupUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: signupTypes.SIGNUP_SUCCESS,
        payload: data
      });
      if (data.message) {
        alert(`${data.message}`);
        window.setTimeout(function () {
          window.location.replace('./login');
          window.location.reload(true);
        }, 1000);
      } else if (data.error) {
        alert(`${data.error}`);
      }
    });
};

export default signUp;
