import React, { useState, useEffect } from "react";
import styles from "./AddTodo.module.css";
import Button from "../UI/Button";
import Container from "../UI/Container";
import FileBase from "react-file-base64";

const initialState = {
  text: "",
  price: "",
  quantity: "",
  img: "",
};
const AddTodo = (props) => {
  // const [text, setText] = useState("");
  // const [price, setPrice] = useState("");
  // const [quantity, setQuantity] = useState("");
  const [state, setState] = useState(initialState);
  useEffect(() => {
    if (props.id) {
      console.log(props.toUpdateData);
      setState(props.toUpdateData);
    }
  }, [props.id, props.toUpdateData]);

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  // const changeHandler = (e) => {
  //   setText(e.target.value);
  // };
  // const changePrice = (e) => {
  //   setPrice(e.target.value);
  // };
  // const changeQuantity = (e) => {
  //   setQuantity(e.target.value);
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("form", state);
    if (!props.id) {
      props.onAddTodo(state);
      setState(initialState);
    } else {
      props.onEditTodo(state);
      setState(initialState);
    }

    // array.push(props.onAddTodo(text));
    // console.log((props.onAddTodo(text),"a"));
    // setText("");
    // array.push(props.onAddTodo(price));
    // setPrice("");
    // array.push(props.onAddTodo(quantity));
    // setQuantity("");
    // console.log(array,"work")
    // return array
  };

  return (
    <>
      <h1 className={styles.header}>Admin Panel</h1>
      <Container>
        <form onSubmit={submitHandler}>
          <label />
          <input
            type="text"
            name="text"
            placeholder="Enter Item Name"
            value={state.text}
            onChange={handleChange}
          />
          <input
            type="text"
            name="quantity"
            placeholder="Enter quantity"
            value={state.quantity}
            onChange={handleChange}
          />
          <input
            type="text"
            name="price"
            placeholder="Enter price"
            value={state.price}
            onChange={handleChange}
          />
          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setState({ ...state, img: base64 })}
            />
          </div>

          <Button type="submit">Add Items</Button>
        </form>
      </Container>
    </>
  );
};
export default AddTodo;
