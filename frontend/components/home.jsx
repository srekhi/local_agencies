import React from 'react';
import AddressFormContainer from './address_form/address_form_container';
import AgencyList from './agency_list/agency_list_container';
import Welcome from './welcome/welcome_container';

const Home = () => (
  <div>
    <Welcome />
    <AddressFormContainer />
    <AgencyList />
  </div>
);

export default Home;
