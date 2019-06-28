import { incidentsTypes } from '../types';
import { fetchIncidentsUrl } from '../../urls';

let authorizationHeader = localStorage.getItem('accessToken');

const fetchIncidents = () => dispatch => {
  fetch(fetchIncidentsUrl, {
    headers: { Authorization: authorizationHeader }
  })
    .then(res => res.json())
    .then(incidents => dispatch({
      type: incidentsTypes.FETCH_INCIDENTS,
      payload: incidents.incidents
    }));
};

export default fetchIncidents;
