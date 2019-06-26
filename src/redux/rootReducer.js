import { combineReducers } from 'redux';
import indexReducer from './reducers/indexReducer';

export default combineReducers({
  test: indexReducer
});
