import { combineReducers } from 'redux';
import indexReducer from './reducers/indexReducer';
import signUpReducer from './reducers/signUpReducer';

export default combineReducers({
  test: indexReducer,
  user: signUpReducer
});
