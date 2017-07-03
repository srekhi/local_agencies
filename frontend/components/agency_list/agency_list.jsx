import React from 'react';

class AgencyList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let agencies = this.props.agencies.map( agency => (
      <li>
        <li>{agency.name}</li>
        <p>User's rating: {agency.rating}/5.0</p>
      </li>
    ));
    return(
      <div>
        <p>Agencies:</p>
        <ul>
        {agencies}
      </ul>
    </div>
  );
  }
}
export default AgencyList;
