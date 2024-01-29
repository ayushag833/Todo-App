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
      <form
        className="flex mb-10 bg-slate-300 rounded-full"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="What is the task today?"
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
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
