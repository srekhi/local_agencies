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

  }
  render(){
    return (
    <form>
      <label>
        Address 1:
        <input
          type="text"
          id="1"
          onKeyPress={this.updateAddress}/>
      </label>

      <label>
        Address 2:
        <input
          type="text"
          id="2"
          onKeyPress={this.updateAddress}
          />
      </label>
    </form>
  );
  }
}

export default AddressForm;
