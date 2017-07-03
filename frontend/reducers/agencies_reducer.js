import { RECEIVE_AGENCIES } from '../actions/agency_actions';

import merge from 'lodash/merge';

const AgenciesReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_AGENCIES:
      return action.agencies;
    default:
      return state;
  }
};

export default AgenciesReducer;
