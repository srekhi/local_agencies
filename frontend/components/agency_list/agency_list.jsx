import React from 'react';

class AgencyList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let agencies = this.props.agencies.map( agency => {
      let rating = agency.rating ? String(agency.rating) + "/5.0" : 'N/A';
      return(
        <li className="agency-list-item">
        <li className="agency-name">{agency.name}</li>
        {}
        <p>User's rating: {rating}</p>
        <p>Distance: {agency['distance']} miles</p>
      </li>);
    });
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
