import React, { Component } from "react";
import axios from "axios";

class AddAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminName: "",
      adminPassword: ""
    };

    this.onChangeAdminName = this.onChangeAdminName.bind(this);
    this.onChangeAdminPassword = this.onChangeAdminPassword.bind(this);
  }

  onChangeAdminName = e => {
    this.setState({
      adminName: e.target.value
    });
  };

  onChangeAdminPassword = e => {
    this.setState({
      adminPassword: e.target.value
    });
  };

  onSubmitAddAdmin = e => {
    e.preventDefault();
    console.log("New Admin added!");

    const newAdmin = {
      username: this.state.adminName,
      password: this.state.adminPassword
    };

    axios
      .post("http://localhost:4000/admin/create", newAdmin)
      .then(res => console.log(res.data))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className='container'>
        <form action='' onSubmit={this.onSubmitAddAdmin}>
          <div className='form-group'>
            <label htmlFor='adminNameInput'>Enter Admin name</label>
            <input
              onChange={this.onChangeAdminName}
              value={this.state.adminName}
              type='text'
              className='form-control'
              name='adminNameInput'
              id='adminNameInput'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='adminPasswordInput'>Enter Admin password</label>
            <input
              onChange={this.onChangeAdminPassword}
              value={this.state.adminPassword}
              type='password'
              className='form-control'
              name='adminPasswordInput'
              id='adminPasswordInput'
            />
            <small id='adminPasswordHelp' className='form-text text-muted'>
              The password should have at least a length of 6 characters
            </small>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Add admin
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddAdmin;
