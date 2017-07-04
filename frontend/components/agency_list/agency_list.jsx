import React from 'react';

class AgencyList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let seen = {};
    let agencies = this.props.agencies.map( (agency, index) => {
      if (!seen[agency.name]){
        seen[agency.name] = true;
        let rating = agency.rating ? String(agency.rating) + "/5" : 'N/A';
        return(
          <li key={index} className="agency-list-item">
          <p className="agency-name">{agency.name}</p>
          <p className="agency-info">User rating: {rating}</p>
          <p className="agency-info">Distance: {agency['distance']} miles</p>
        </li>);
      }});
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
