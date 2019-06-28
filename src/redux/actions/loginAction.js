import { loginTypes } from '../types';
import { loginUrl } from '../../urls';

const login = loginData => dispatch => {
  return fetch(loginUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
    .then(res => res.json())
    .then(data => {
      const { accessToken } = data;
      localStorage.setItem('access_token', accessToken);
      dispatch({
        type: loginTypes.LOGIN_SUCCESS,
        payload: data
      });
      if (data.message) {
        alert(`${data.message}`);
        window.setTimeout(function () {
          document.location.href = './incidents';
        }, 1000);
      } else if (data.error) {
        alert(`${data.error}`);
      }
    });
};

export default login;
