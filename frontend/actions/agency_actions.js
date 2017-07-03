import * as APIUtil from '../util/address_api';

export const RECEIVE_AGENCIES = 'RECEIVE_AGENCIES';


export const receiveAgencies = agencies => ({
  type: RECEIVE_AGENCIES,
  agencies
});

export const fetchAgencies = (address1, address2) => dispatch => (
  APIUtil.fetchAgencies(address1, address2).then(agencies => (
    dispatch(receiveAgencies(agencies))
  ))
);
