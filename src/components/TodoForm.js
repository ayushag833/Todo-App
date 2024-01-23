import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [data, setData] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(data);
    setData("");
  };

  return (
    <div>
      <form className="flex whitespace-nowrap" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="What is the task today?"
          className=""
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button type="submit" className="">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
