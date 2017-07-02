import React from 'react';

class AddressForm extends React.Component {
  constructor(){
    super();
    this.state = {
      address1: "",
      address2: ""
    };
    this.updateAddress = this.updateAddress.bind(this);

  }

  updateAddress(event){
    event.target.id == 1 ?
      this.setState({address1: event.target.value}) :
      this.setState({address2: event.target.value});
  }
  render(){
    return (
    <form>
      <label>
        Address 1:
        <input
          type="text"
          id="1"
          value={this.state.address1}
          onChange={this.updateAddress}/>
      </label>
      <br />
      <label>
        Address 2:
        <input
          type="text"
          id="2"
          value={this.state.address2}
          onChange={this.updateAddress}
          />
      </label>
      <br />
      <button type="submit">Submit Addresses</button>
    </form>
  );
  }
}

export default AddressForm;
