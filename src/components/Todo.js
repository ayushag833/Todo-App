import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-between">
      <div>
      <input
        type="checkbox"
        id={todo.id}
        onClick={() => toggleComplete(todo.id)}
      />
      <label
        htmlFor={todo.id}
        // className={todo.completed ? "line-through" : ""}
      >
        {todo.task}
      </label>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(todo.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};

export default Todo;
