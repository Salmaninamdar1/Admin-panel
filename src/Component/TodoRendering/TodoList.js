import React from "react";
import Todo from "./Todo";
import Container from "../UI/Container";

const TodoList = (props) => {
  console.log(props.data, "daa");
  const markTodo = (id) => {
    props.markTodo(id);
  };
  const deleteTodo = (id) => {
    props.deleteTodo(id);
  };

  return (
    <>
      {props.data.length !== 0 ? (
        props.data
          .sort((a, b) => b.timeStamp - a.timeStamp) //sorting data
          .map((todo) =>
          // console.log(todo)
           (
            <Container key={todo.id}>

              <Todo
                todoItem={todo}
                // onMarkTodo={markTodo}
                onDeleteTodo={deleteTodo}
              />
                 <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{todo.task}</h5>
                  <p className="card-text">
                   {todo.price}
                  </p>
                  <a href="#" className="btn btn-primary">
                   {todo.quantity}
                  </a>
                  
                </div>
              </div>

            </Container>
            
          ))
      ) : (
        <h2 style={{ textAlign: "center" }}>
          No Item available here. Please write something to add...
        </h2>
      )}
    </>
  );
};

export default TodoList;
