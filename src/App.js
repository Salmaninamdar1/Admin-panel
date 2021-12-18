import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./Component/TodoForm/AddTodo";
import TodoList from "./Component/TodoRendering/TodoList";
import NewComponent from "./Component/Products/AddCard";
import Image from "./Component/UI/image";
import CardB from "./Component/Card/CardB";

const initialState = {
  text: "",
  price: "",
  quantity: "",
  img: "",
};

function App() {
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(null);
  const [editData, setEditData] = useState(initialState);
  // function for adding new todo
  const addTodo = (data) => {
    if (data) {
      // console.log(data.myfile, "Aaa");
      setTodoList((prev) => {
        return [
          ...prev,
          {
            task: data.text,
            price: data.price,
            quantity: data.quantity,
            id: Math.random().toString(),
            mark: false,
            timeStamp: new Date(),
            image: data.img,
          },
        ];
      });
    }
  };
  useEffect(() => {
    if (id) {
      const toData = todoList.find((todo) => todo.id === id);
      console.log(toData, "todata", id);
      const data = {
        text: toData.task,
        price: toData.price,
        quantity: toData.quantity,
        img: toData.image,
      };
      setEditData(data);
    }
  }, [id]);
  // function for marking todo true or false
  const markTodo = (id) => {
    let data1 = todoList.find((todo) => todo.id === id);
    console.log("sqs", data1);
    data1 = { ...data1, mark: !data1.mark };
    let updatedData = todoList.filter((todo) => todo.id !== id);
    console.log("ud", data1);

    setTodoList([...updatedData, data1]);
    console.log("data", todoList);
  };

  // function for deleting todo by id
  const handleDelete = (id) => {
    const updatedData = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedData);
  };
  const handleEdit = (id) => {
    setId(id);
    console.log(id);
  };
  console.log(editData);
  const editForm = (data) => {
    const filteredData = todoList.filter((todo) => todo.id !== id);
    const newData = {
      task: data.text,
      price: data.price,
      quantity: data.quantity,
      id: id,
      mark: false,
      timeStamp: new Date(),
      image: data.img,
    };
    setTodoList([...filteredData, newData]);
    setId(null);
  };
  return (
    <>
      <AddTodo
        onAddTodo={addTodo}
        onEditTodo={editForm}
        id={id}
        toUpdateData={editData}
      />
      {/* <TodoList data={todoList} markTodo={markTodo} deleteTodo={deleteTodo} /> */}
      <CardB data={todoList} dataDelete={handleDelete} dataEdit={handleEdit} />
      <Image />
    </>
  );
}

export default App;
