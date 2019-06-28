import { combineReducers } from 'redux';
import indexReducer from './reducers/indexReducer';
import signUpReducer from './reducers/signUpReducer';
import loginReducer from './reducers/loginReducer';
import incidentsReducer from './reducers/incidentsReducer';

export default combineReducers({
  test: indexReducer,
  user: signUpReducer,
  login: loginReducer,
  incidentsReducer
});
