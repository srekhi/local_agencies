import React from 'react';

class AgencyList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let agencies = this.props.agencies.map( agency => {
      let rating = agency.rating ? String(agency.rating) + "/5" : 'N/A';
      return(
        <li className="agency-list-item">
        <li className="agency-name">{agency.name}</li>
        <li>User's rating: {rating}</li>
        <li>Distance: {agency['distance']} miles</li>
      </li>);
    });
    return(
      <div>
        <p id="agency-header">Agencies:</p>
        <ul>
        {agencies}
      </ul>
    </div>
  );
  }
}
export default AgencyList;
