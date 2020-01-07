import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <React.Fragment>
      <tr>
        <td>{props.item._id}</td>
        <td>{props.item.item}</td>
        <td>{props.item.amount}</td>
        <td>{props.item.category}</td>
        <td>
          <div
            className='ml-4 d-inline-block'
            onClick={() => props.onDeleteItem(props.item._id)}
          >
            <i className='far fa-trash-alt'></i>
          </div>
          <Link
            to={"/update/" + props.item._id}
            className='ml-4 d-inline-block text-dark'
            onClick={() => props.onEditItem(props.item._id)}
          >
            <i className='fas fa-edit'></i>
          </Link>
        </td>
      </tr>
    </React.Fragment>
  );
}

export default Item;
