import React from 'react';

class AddressForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address1: "",
      address2: ""
    };
    this.updateAddress = this.updateAddress.bind(this);
    this.fetchAgencies = this.fetchAgencies.bind(this);
  }

  updateAddress(event){
    event.target.id == 1 ?
      this.setState({address1: event.target.value}) :
      this.setState({address2: event.target.value});
  }

  fetchAgencies(event){
    event.preventDefault();
    this.props.fetchAgencies(this.state.address1, this.state.address2);
  }

  render(){
    return (
    <form onSubmit={this.fetchAgencies}>
      <label>
        Address 1:
        <input
          className="address-input"
          type="text"
          id="1"
          value={this.state.address1}
          placeholder="2100 Barton Springs Rd, Austin, TX 78746"
          onChange={this.updateAddress}/>
      </label>
      <br />
      <label >
        Address 2:
        <input
          className="address-input"
          type="text"
          id="2"
          placeholder="1100 Congress Ave, Austin, TX 78701"
          value={this.state.address2}
          onChange={this.updateAddress}
          />
      </label>
      <br />
      <button id='submit-address-btn' type="submit">Find Local Realtors</button>
    </form>
  );
  }
}

export default AddressForm;
