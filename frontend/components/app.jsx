import React from 'react';
import AddressFormContainer from './address_form/address_form_container';
import AgencyList from './agency_list/agency_list_container';
// <AgencyList />
// App handles the top level rendering logic
const App = () => (
  <div>
    <AddressFormContainer />
    <AgencyList />
  </div>
);

export default App;
