import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from "./Component/TodoForm/AddTodo";
import TodoList from "./Component/TodoRendering/TodoList";


function App() {
  const [todoList, setTodoList] = useState([]);

  // function for adding new todo
  const addTodo = (data) => {
    if (data) {
      setTodoList((prev) => {
        return [
          ...prev,
          {
            task: data,
            id: Math.random().toString(),
            mark: false,
            timeStamp: new Date(),
          },
        ];
      });
    }
  };

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
  const deleteTodo = (id) => {
    const updatedData = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedData);
  };

  return (
    <>
       
      <AddTodo onAddTodo={addTodo} />
      <TodoList data={todoList} markTodo={markTodo} deleteTodo={deleteTodo} />
      
    </>
  );
}

export default App;
