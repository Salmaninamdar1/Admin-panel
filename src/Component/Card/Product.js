import React from "react";
import "./CardB.css";

const Product = (props) => {
  const handleDelete = () => {
    props.cardDelete(props.todo.id);
  };
  const handleEdit = () => {
    props.cardEdit(props.todo.id);
  };

  return (
    <div className="card">
      <img src={props.todo.image} alt="Avatar" style={{ width: "50%" }} />
      <div className="container">
        <h4>
          <b>{props.todo.task}</b>
        </h4>
        <p>{props.todo.price}</p>
        <p>{props.todo.quantity}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Product;
