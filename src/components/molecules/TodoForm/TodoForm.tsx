import React, { ChangeEvent, SyntheticEvent } from "react";
import H1 from "../../atoms/H1";
import CustomInput from "../../atoms/CustomInput/CustomInput";
import CustomDropdown from "../../atoms/CustomDropdown/CustomDropdown";
import { useTodoAuth } from "../../../context/TaskContext";
import Card from "../../atoms/Card/Card";

export interface Todo {
  title: string;
  category: string;
  completed: boolean;
}

const TodoForm = () => {
  const [formFields, setFormFields] = React.useState<Todo>({
    title: "",
    category: "Select a Category",
    completed: false,
  });
  const { createTaskHandler, todos } = useTodoAuth();

  const formHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const dropdownSelect = (category: string) => {
    setFormFields({ ...formFields, category });
  };

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const d = new Date();
    const date = d.toISOString().slice(0, 10).split("-");
    date[1] = months.filter((_, index) => index === Number(date[1]) - 1)[0];
    const todo = {
      ...formFields,
      createdAt: d.toISOString().slice(11, 16),
      createdOn: date.join(" "),
    };

    const exists = todos.find((task: Todo) => task.title === todo.title);

    if (!exists) {
      createTaskHandler(todo);
      alert("task has been created");
      setFormFields({
        title: "",
        category: "Select a Category",
        completed: false,
      });
    } else {
      alert("this task already esists");
      setFormFields({ ...formFields, title: "" });
    }
  };

  return (
    <Card styling="bg-lilac">
      <H1 styling="text-white uppercase " text="Create a new Task Here" />
      <form onSubmit={submitHandler}>
        <CustomInput
          label="Title"
          type="text"
          placeholder="Enter task title here"
          name="title"
          value={formFields.title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            formHandler(e);
          }}
        />
        <CustomDropdown
          select={dropdownSelect}
          category={formFields.category}
        />
        <button
          className="text-base md:text-lg py-1 md:py-2 w-full rounded-lg bg-purple-700 hover:bg-purple-500 active:bg-purple-600 text-white mt-3.5 border-darkgray disabled:bg-gray-300 transition-all duration-150 ease-linear"
          type="submit"
          disabled={
            formFields.category === "Select a Category" ||
            formFields.title === ""
          }
        >
          Submit
        </button>
      </form>
    </Card>
  );
};

export default TodoForm;
