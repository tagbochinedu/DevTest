import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TodoProvider } from "./context/TaskContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
