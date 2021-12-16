import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import Button from "../UI/Button";
import Container from "../UI/Container";

const AddTodo = (props) => {
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
  };
  const changePrice = (e) => {
    setPrice(e.target.value);
  };
  const changeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddTodo(text);
    setText("");
    props.onAddTodo(price);
    setPrice("");
    props.onAddTodo(quantity);
    setQuantity("");
  };


  return (
    <>
      <h1 className={styles.header}>Admin Panel</h1>
      <Container>
        <form onSubmit={submitHandler}>
          <label/>
          <input
            type="text"
            name="addTodo"
            placeholder="Enter Item Name"
            value={text}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="addQuantity"
            placeholder="Enter quantity"
            value={quantity}
            onChange={changeQuantity}
          />
          <input
            type="text"
            name="addprice"
            placeholder="Enter price"
            value={price}
            onChange={changePrice}
          />
          <Button type="submit">Add Items</Button>
        </form>
      </Container>
    </>
  );
};
export default AddTodo;
