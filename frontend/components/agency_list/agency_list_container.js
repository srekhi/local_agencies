import React from 'react';
import { connect } from 'react-redux';
import AgencyList from './agency_list';
import fetchAgencies from '../../actions/agency_actions';

const mapStateToProps = state => ({
  agencies: state.agencies
});

export default connect(mapStateToProps, null)(AgencyList);
