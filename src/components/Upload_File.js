import React, { Component } from "react";
import axios from "axios";

export class upload_File extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: {}
    };

    this.onSubmitUpload = this.onSubmitUpload.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
  }

  onSubmitUpload = e => {
    // e.preventDefault();
    console.log("Picture uploaded");

    // const newImg = {
    //   img: this.state.img
    // };

    // axios
    //   .post("http://localhost:4000/profile/")
    //   .then(response => response.json("Picture uploaded"));
  };

  onChangeFile = async e => {
    console.log(e.target.files[0]);
    await this.setState({
      img: e.target.files[0]
    });

    console.log("this is the state", this.state.img);
  };

  render() {
    return (
      <div className='container'>
        <form
          onSubmit={this.onSubmitUpload}
          action='/profile'
          method='post'
          encType='multipart/form-data'
        >
          <div className='form-group'>
            <label htmlFor='fileUploadInput'>Upload Image</label>
            <input
              onChange={this.onChangeFile}
              type='file'
              name='fileUploadInput'
              id='fileUploadInput'
              className='form-control-file'
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Upload Image
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default upload_File;
