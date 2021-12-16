import React from "react";
import Button from "../UI/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import style from "./Todo.module.css";

const Todo = (props) => {
  const markHandler = () => {
    props.onMarkTodo(props.todoItem.id);
  };
  const deleteHandler = () => {
    props.onDeleteTodo(props.todoItem.id);
  };

  return (
    <div className={style.root}>
    <div className={style.todoContainer}>
      {!props.todoItem.mark ? ( //if todo.mark is false rendering this
        <>
          <p>{props.todoItem.task}</p>
          <Button
            type="button"
            className={style.mrkButton}
            onClick={markHandler}
          >
            &#10003;
          </Button>
        </>
      ) : (
        //if todo.mark is true rendering this
        <>
          <p style={{ textDecoration: "line-through" }}>
            {props.todoItem.task}
          </p>
          <Button
            type="button"
            className={style.unMrkButton}
            onClick={markHandler}
          >
            &#215;
          </Button>
        </>
      )}

      <Button type="button" className={style.delButton} onClick={deleteHandler}>
        <DeleteIcon />
      </Button>
    </div>
    </div>
  );
};

export default Todo;
