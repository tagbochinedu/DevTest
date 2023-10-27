import React, { useState, useContext } from "react";
import { Todo } from "../components/molecules/TodoForm/TodoForm";

interface Children {
  children: React.ReactNode;
}

interface UserData {
  todos: Todo[]
  createTaskHandler: (prop: Todo) => void;
  completionStatusHandler: (prop: Todo) => void;
  deleteTaskHandler: (index: number) => void;
}

const TodoContext = React.createContext<UserData>({
  todos: [],
  createTaskHandler: () => {},
  completionStatusHandler: () => {},
  deleteTaskHandler: () => {},
});

export function useTodoAuth() {
  return useContext(TodoContext);
}

export const TodoProvider = ({ children }: Children) => {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  const createTaskHandler = (prop: Todo) => {
    let tasks = JSON.parse(localStorage.getItem("todos") || "[]");

    tasks.unshift(prop);
    setTodos(tasks);
    localStorage.setItem("todos", JSON.stringify(tasks));
  };

  const completionStatusHandler = (prop: Todo) => {
    let tasks = JSON.parse(localStorage.getItem("todos") || "[]");
    const index = tasks.filter((task: Todo) => task.title !== prop.title);
    if (prop.completed) {
      index.push(prop);
    } else {
      index.unshift(prop);
    }
    setTodos(index);
    localStorage.setItem("todos", JSON.stringify(index));
  };

  const deleteTaskHandler = (prop: number) => {
    let tasks = JSON.parse(localStorage.getItem("todos") || "[]");
    const index = tasks.filter((_: Todo, index: number) => index !== prop);
     setTodos(index);
     localStorage.setItem("todos", JSON.stringify(index));
  };

  const value = {
    todos,
    createTaskHandler,
    completionStatusHandler,
    deleteTaskHandler,
 
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
