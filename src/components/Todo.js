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
          className="m-2 text-xl cursor-pointer"
        />
        <label
          htmlFor={todo.id}
          className={`m-1 text-base md:text-xl ${
            todo.completed ? "line-through" : ""
          }`}
        >
          {todo.task}
        </label>
      </div>
      <div>
        {!todo.completed ? (
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => editTodo(todo.id)}
            className="m-2 md:text-xl cursor-pointer"
          />
        ) : (
          ""
        )}
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(todo.id)}
          className="m-2 md:text-xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Todo;
