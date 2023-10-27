import React, { useState, useContext } from "react";
import { Todo } from "../components/molecules/TodoForm/TodoForm";

interface Children {
  children: React.ReactNode;
}

interface UserData {
  todos: null | any;
  updateStorage: (prop: Todo) => void;
  completionStatusHandler: (prop: Todo) => void;
}

const TodoContext = React.createContext<UserData>({
  todos: null,
  updateStorage: (prop: Todo) => {},
  completionStatusHandler: (prop: Todo) => {},
});

export function useTodoAuth() {
  return useContext(TodoContext);
}

export const TodoProvider = ({ children }: Children) => {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );
  const updateStorage = (prop: Todo) => {
    let tasks = JSON.parse(localStorage.getItem("todos") || "[]");

    tasks.unshift(prop);
    setTodos(tasks);
    localStorage.setItem("todos", JSON.stringify(tasks));
  };
  
  const completionStatusHandler = (prop: Todo) => {
    let tasks = JSON.parse(localStorage.getItem("todos") || "[]");
    const index = tasks.findIndex((task: Todo) => task.title === prop.title);
    tasks[index] = prop;
    setTodos(tasks);
    localStorage.setItem("todos", JSON.stringify(tasks));
  };

  const value = {
    todos,
    updateStorage,
    completionStatusHandler
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
