import React from 'react';
import AddressFormContainer from './address_form/address_form_container';
import AgencyList from './agency_list/agency_list_container';
import Welcome from './welcome';
// <AgencyList />
// App handles the top level rendering logic
const Home = () => (
  <div>
    <Welcome />
    <AddressFormContainer />
    <AgencyList />
  </div>
);

export default Home;
