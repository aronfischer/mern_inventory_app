// You land on this page when you click on the edit button on the overview page.
// The item details will be displayed in a form and can be resubmitted

import React, { Component } from "react";
import axios from "axios";

class Edit_Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: "",
      itemAmount: "",
      itemCategory: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/inventory/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          itemName: response.data.item,
          itemAmount: response.data.amount,
          itemCategory: response.data.category
        });
      });
  }

  onChangeItemName = e => {
    this.setState({
      itemName: e.target.value
    });
  };

  onChangeItemAmount = e => {
    this.setState({
      itemAmount: e.target.value
    });
  };

  onChangeItemCategory = e => {
    this.setState({
      itemCategory: e.target.value
    });
  };

  onSubmitItemChange = e => {
    e.preventDefault();
    console.log("Changes saved");

    const updatedItem = {
      item: this.state.itemName,
      amount: this.state.itemAmount,
      category: this.state.itemCategory
    };

    axios
      .post(
        "http://localhost:4000/inventory/update/" + this.props.match.params.id,
        updatedItem
      )
      .then(response => console.log(response.date));
  };

  render() {
    return (
      <div className='container'>
        <form action='' className='form' onSubmit={this.onSubmitItemChange}>
          <div className='form-group'>
            <label htmlFor='inputEditItemName'>Enter new name</label>
            <input
              onChange={this.onChangeItemName}
              value={this.state.itemName}
              type='text'
              id='inputEditItemName'
              name='inputEditItemName'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='inputEditItemAmount'>Enter new amount</label>
            <input
              onChange={this.onChangeItemAmount}
              value={this.state.itemAmount}
              type='amount'
              id='inputEditItemAmount'
              name='inputEditItemAmount'
              className='form-control'
            />
            <small id='editAmountInputHelp' className='form-text text-muted'>
              Please enter a number
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='inputEditItemCategory'>Enter new category</label>
            <input
              onChange={this.onChangeItemCategory}
              value={this.state.itemCategory}
              type='text'
              id='inputEditItemCategory'
              name='inputEditItemCategory'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-primary' type='submit'>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Edit_Item;
