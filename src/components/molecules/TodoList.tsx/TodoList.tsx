import { ChangeEvent } from "react";
import H1 from "../../atoms/H1";
import Card from "../../atoms/Card/Card";
import { useTodoAuth } from "../../../context/TaskContext";

const TodoList = () => {
  const { todos, completionStatusHandler } = useTodoAuth();
  const checkHandler = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    let completedTask = todos.find((_: any, index: number) => index === i);
    completedTask.completed = e.target.checked;
    completionStatusHandler(completedTask);
  };

  return (
    <Card styling="bg-dark mt-10">
      <H1 styling="uppercase text-white" text="View Your Tasks Here" />
      <div className="mt-4 px-4 py-2 rounded-lg min-h-[80px] relative">
        {todos.length === 0 ? (
          <p className="text-white text-center text-xs absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
            No Tasks Have been Created Yet
          </p>
        ) : (
          <>
            {todos.map((todo: any, index: number) => (
              <div
                key={index}
                className={`relative bg-darkgray p-2 rounded-xl flex mb-3 transition-all ease-linear duration-150 before:h-[2px] before:bg-white before:absolute before:top-[50%] before:-translate-y-[50%] before:transition-all before:duration-150 before:ease-linear  ${
                  !todo.completed ? "before:w-[0%] text-white" : "text-gray-500 before:w-[100%]"
                }`}
              >
                {" "}
                
                <div className="font-mono border border-white rounded-xl bg-dark px-2 py-1">
                  <h4 className="font-semibold text-2xl text-center">
                    {todo.createdOn.split(" ")[2]}
                  </h4>
                  <h6 className="font-semibold text-base">
                    {todo.createdOn.split(" ")[1]},{" "}
                    {todo.createdOn.split(" ")[0]}
                  </h6>
                  <p className="text-sm font-medium text-center">
                    {todo.createdAt}
                  </p>
                </div>
                <div className="grow pl-4 py-1 font-mono flex flex-col justify-evenly">
                  <h4 className="text-2xl font-bold">{todo.title}</h4>
                  <h6 className="font-semibold text-base">{todo.category}</h6>
                </div>
                <div className="w-1/6 border-l-[0.5px] border-gray-500 flex justify-center items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={todo.completed}
                    className="relative rounded border border-white appearance-none w-5 h-5 checked:bg-lilac checked:border-transparent before:absolute before:content-[''] before:checked:bg-white before:w-0.5 before:h-1 before:skew-x-[40deg] before:top-[52%] before:left-[35%] before:origin-bottom after:absolute after:content-[''] after:checked:bg-white after:w-0.5 after:h-2 after:skew-x-[-40deg] after:top-[28%] after:left-[35%] after:origin-bottom"
                    onChange={(e) => {
                      checkHandler(e, index);
                    }}
                  />
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
