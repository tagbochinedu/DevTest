import Header from "./components/molecules/Header/Header";
import TodoForm from "./components/molecules/TodoForm/TodoForm";
import TodoList from "./components/molecules/TodoList.tsx/TodoList";

export default function App() {
  return (
    <main className="bg-darkgray min-h-screen pb-10">
      <Header />
      <TodoForm/>
      <TodoList/>
    </main>
  );
}
