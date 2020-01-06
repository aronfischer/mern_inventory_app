import React from "react";

function Item(props) {
  return (
    <React.Fragment>
      <tr>
        <td>{props.item._id}</td>
        <td>{props.item.item}</td>
        <td>{props.item.amount}</td>
        <td>{props.item.category}</td>
        <td>
          <div className='ml-4 d-inline-block'>
            <i className='far fa-trash-alt'></i>
          </div>
          <div className='ml-4 d-inline-block'>
            <i className='fas fa-edit'></i>
          </div>
        </td>
      </tr>
    </React.Fragment>
  );
}

export default Item;
