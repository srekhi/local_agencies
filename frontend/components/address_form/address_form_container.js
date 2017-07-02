import React from 'react';
import { connect } from 'react-redux';
import AddressForm from './address_form';
import { fetchAgencies } from '../../actions/agency_actions';

const mapDispatchToProps = dispatch => ({
  fetchAgencies: (address1, address2) => dispatch(fetchAgencies(address1, address2))
});

export default connect(null, mapDispatchToProps)(AddressForm);
