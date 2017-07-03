import React from 'react';
import { connect } from 'react-redux';
import AddressForm from './address_form';
import { fetchAgencies, clearAgencies } from '../../actions/agency_actions';
import { logout } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  fetchAgencies: (address1, address2) => dispatch(fetchAgencies(address1, address2)),
  clearAgencies: () => dispatch(clearAgencies()),
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(AddressForm);
