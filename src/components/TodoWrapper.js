import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import EditTodoForm from "./EditTodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState(() => {
    const localStorageData = localStorage.getItem("Tasks");
    if (localStorageData == null) return [];
    return JSON.parse(localStorageData);
  });

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    todo.length > 0 &&
      setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : { ...todo }
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: task, isEditing: !todo.isEditing }
          : { ...todo }
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-5 bg-white w-11/12 md:w-8/12 lg:w-5/12">
      <h1 className="text-center text-blue-700 text-3xl font-medium m-3 mb-10">
        Todo App
      </h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm todo={todo} key={todo.id} editTask={editTask} />
        ) : (
          <Todo
            todo={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
// todos is an array and todo is a single object of todos array
export default TodoWrapper;
