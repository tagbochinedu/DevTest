import { useState, ChangeEvent } from "react";
import H1 from "../../atoms/H1";
import Card from "../../atoms/Card/Card";
import { useTodoAuth } from "../../../context/TaskContext";
import CustomInput from "../../atoms/CustomInput/CustomInput";

const TodoList = () => {
  const { todos, completionStatusHandler, deleteTaskHandler } = useTodoAuth();
  const [filtered, setFiltered] = useState("");
  const checkHandler = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    let completedTask = todos.find((_: any, index: number) => index === i);
    if (completedTask) {
      completedTask.completed = e.target.checked;
      completionStatusHandler(completedTask);
    }
  };

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFiltered(e.target.value.toLocaleLowerCase());
  };

  function copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("copied"))
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  }

  return (
    <Card styling="bg-dark mt-10">
      <H1 styling="uppercase text-white text-center" text="View Your Tasks Here" />
      <div className="mt-4 px-1.5 md:px-4 py-2 rounded-lg min-h-[80px] relative">
        {todos.length === 0 ? (
          <p className="text-white text-center text-xs absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
            No Tasks Have been Created Yet
          </p>
        ) : (
          <>
            <CustomInput
              type="text"
              placeholder="Search..."
              name="search"
              onChange={(e) => {
                searchHandler(e);
              }}
            />
            {todos
              .filter(
                (todo) =>
                  todo.category.toLowerCase().includes(filtered)||todo.title.toLowerCase().includes(filtered)
                  
              )
              .map((todo: any, index: number) => (
                <div
                  key={index}
                  className={`relative bg-darkgray p-2 rounded-xl flex mb-3 transition-all ease-linear duration-150 before:h-[4px] before:-left-[2.5%] before:bg-gray-500 before:absolute before:top-[50%] before:-translate-y-[50%] before:transition-all before:duration-150 before:ease-linear  ${
                    !todo.completed
                      ? "before:w-[0%] text-white"
                      : "text-gray-500 before:w-[105%]"
                  }`}
                >
                  {" "}
                  <div
                    className={`min-w-[50px] font-mono border rounded-xl bg-dark px-2 py-1 transition-all ease-linear duration-150 ${
                      !todo.completed ? "border-white " : "border-gray-500"
                    }`}
                  >
                    <h4 className="font-semibold text-lg md:text-xl lg:text-2xl text-center">
                      {todo.createdOn.split(" ")[2]}
                    </h4>
                    <h6 className="font-semibold text-xs md:text-sm lg:text-base text-center">
                      <span className="max-md:block">
                        {todo.createdOn.split(" ")[1]}
                      </span>{" "}
                      <span className="max-md:block">
                        {todo.createdOn.split(" ")[0]}
                      </span>
                    </h6>
                    <p className="text-xs md:text-sm font-medium text-center">
                      {todo.createdAt}
                    </p>
                  </div>
                  <div className="grow pl-4 py-1 font-mono flex flex-col justify-center md:justify-evenly">
                    <h4
                      className="text-base md:text-xl lg:text-2xl font-bold cursor-pointer"
                      onClick={() => {
                        copyToClipboard(todo.title);
                      }}
                    >
                      {todo.title}
                    </h4>
                    <h6 className="font-semibold text-base">{todo.category}</h6>
                  </div>
                  <div className="md:w-1/6 md:border-l-[0.5px] border-gray-500 flex justify-center items-center gap-x-2 md:gap-x-4">
                    <input
                      id="remember"
                      type="checkbox"
                      checked={todo.completed}
                      className="relative rounded border border-white appearance-none w-3 md:w-5 h-3 md:h-5 checked:bg-lilac checked:border-transparent "
                      onChange={(e) => {
                        checkHandler(e, index);
                      }}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      className={`h-3 md:h-5 w-auto transition-all duration-150 ease-linear ${
                        !todo.completed
                          ? "fill-white hover:fill-red-500 "
                          : "fill-gray-500"
                      }`}
                      onClick={() => deleteTaskHandler(index)}
                    >
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </Card>
  );
};

export default TodoList;
