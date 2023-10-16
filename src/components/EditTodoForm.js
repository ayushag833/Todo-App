import React, { useState } from "react";

const EditTodoForm = ({ editTask, todo }) => {
  const [data, setData] = useState(todo.task);
  const submitHandler = (e) => {
    e.preventDefault();
    editTask(data, todo.id);
    setData("");
  };

  return (
    <div>
      <form className="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Update Todo"
          className=""
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button type="submit" className="">
          Update Todo
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;
