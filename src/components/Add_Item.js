// Here items can be added into a form and then into the database

import React, { Component } from "react";
import axios from "axios";

class Add_Item extends Component {
  constructor(props) {
    super();

    this.state = {
      itemName: "",
      itemAmount: 0,
      itemCategory: "",
      items: []
    };

    this.onSubmitAddItem = this.onSubmitAddItem.bind(this);
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemAmount = this.onChangeItemAmount.bind(this);
    this.onChangeItemCategory = this.onChangeItemCategory.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/inventory/")
      .then(response => {
        this.setState({
          itemName: response.body.item,
          itemAmount: response.body.amount,
          itemCategory: response.body.category,
          items: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onSubmitAddItem(e) {
    e.preventDefault();
    console.log("submitted");

    const newItem = {
      item: this.state.itemName,
      amount: this.state.itemAmount,
      category: this.state.itemCategory
    };

    axios
      .post("http://localhost:4000/inventory/create/", newItem)
      .then(res => console.log(res.data))
      .catch(function(error) {
        console.log(error);
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

  render() {
    return (
      <div className='container'>
        <form className='form' onSubmit={this.onSubmitAddItem}>
          <div className='form-group'>
            <label htmlFor='itemInput'>Item name</label>
            <input
              onChange={this.onChangeItemName}
              value={this.state.itemName}
              type='text'
              name='itemInput'
              id='itemInput'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='amountInput'>Item amount</label>
            <input
              onChange={this.onChangeItemAmount}
              value={this.state.itemAmount}
              type='number'
              name='amountInput'
              id='amountInput'
              className='form-control'
            />
            <small id='amountInputHelp' className='form-text text-muted'>
              Please enter a number
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='categoryInput'>Item category</label>
            <input
              onChange={this.onChangeItemCategory}
              value={this.state.itemCategory}
              type='text'
              name='categoryInput'
              id='categoryInput'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Add Item
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Add_Item;
