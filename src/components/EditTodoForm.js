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
      <form
        className="flex my-5 bg-slate-300 rounded-full"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="Update Todo"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
          className="bg-slate-300 placeholder-black m-2 md:m-5 rounded-full w-full sm:w-11/12 focus:outline-none text-base md:text-xl"
        />
        <button
          type="submit"
          className="text-white whitespace-nowrap bg-orange-500 p-3 m-0 md:m-0 md:p-5 rounded-r-full text-base md:text-xl"
        >
          Update Todo
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;
