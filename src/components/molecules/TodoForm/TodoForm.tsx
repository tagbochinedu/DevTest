import React, { ChangeEvent, SyntheticEvent } from "react";
import H1 from "../../atoms/H1";
import CustomInput from "../../atoms/CustomInput/CustomInput";
import CustomDropdown from "../../atoms/CustomDropdown/CustomDropdown";

export interface Todo {
  title: string;
  createdAt: string;
  createdOn: string;
  category: string;
  completed: boolean;
}

const TodoForm = () => {
  const [formFields, setFormFields] = React.useState<Todo>({
    title: "",
    createdAt: "",
    createdOn: "",
    category: "",
    completed: false,
  });

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
    setFormFields({
      ...formFields,
      createdAt: d.toISOString().slice(11, 16),
      createdOn: date.join(" "),
    });
  };

  return (
    <div className="max-w-[50%] mx-auto bg-lilac p-10 rounded-md font-mono">
      <H1
        styling="text-white text-center uppercase text-2xl"
        text="Create a new Task Here"
      />
      <form onSubmit={submitHandler}>
        <CustomInput
          label="Title"
          type="text"
          placeholder="Enter task title here"
          name="title"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            formHandler(e);
          }}
        />
        <CustomDropdown select={dropdownSelect} />
        <button
          className="text-lg py-2 w-full rounded-lg bg-purple-700 hover:bg-purple-500 active:bg-purple-600 text-white mt-3.5 border-darkgray disabled:bg-gray-300 transition-all duration-150 ease-linear"
          type="submit"
          disabled={formFields.category === "" || formFields.title === ""}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
