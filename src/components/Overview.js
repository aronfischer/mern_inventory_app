// Here the Inventory will be displayed

// You can add and delete items

import React, { Component } from "react";
import axios from "axios";
import Item from "./Item";

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.onEditItem = this.onEditItem.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/inventory/")
      .then(response => {
        this.setState({
          items: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onDeleteItem = id => {
    axios.delete("http://localhost:4000/inventory/" + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      items: this.state.items.filter(item => item._id !== id)
    });
  };

  onEditItem = id => {};

  render() {
    return (
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Item</th>
              <th scope='col'>Amount</th>
              <th scope='col'>Category</th>
              <th scope='col'>Delete / Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map(item => {
              return (
                <Item
                  key={item._id}
                  item={item}
                  onDeleteItem={this.onDeleteItem}
                  onEditItem={this.onEditItem}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Overview;
