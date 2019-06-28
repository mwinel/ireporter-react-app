import { incidentsTypes } from '../../redux/types';

const initialState = {
  incidents: []
};

const incidentsReducer = (state = initialState, action) => {
  switch (action.type) {
  case incidentsTypes.FETCH_INCIDENTS:
    return {
      ...state,
      incidents: action.payload
    };
  default:
    return state;
  }
};

export default incidentsReducer;
