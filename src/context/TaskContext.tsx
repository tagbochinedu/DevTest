import React, { useState, useContext } from "react";
import { Todo } from "../components/molecules/TodoForm/TodoForm";

interface Children {
  children: React.ReactNode;
}

interface UserData {
  todos: null | any;
  updateStorage: (prop: Todo) => void;
}

const UserContext = React.createContext<UserData>({
  todos: null,
  updateStorage: (prop: Todo) => {},
});

export function useUserAuth() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }: Children) => {
  const [todos, setTodos] = useState<Todo[]>(
    localStorage.get("todos") ? JSON.parse(localStorage.get("todos")) : []
  );

  const updateStorage = (prop: Todo) => {
    let tasks = localStorage.get("todos")
      ? JSON.parse(localStorage.get("todos"))
      : [];

    tasks.push(prop);
    setTodos(tasks);
    localStorage.set("todos", JSON.stringify(tasks));
  };

  const value = {
    todos,
    updateStorage,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
