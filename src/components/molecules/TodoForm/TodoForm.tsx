import React, { ChangeEvent, SyntheticEvent } from "react";
import H1 from "../../atoms/H1";
import CustomInput from "../../atoms/CustomInput/CustomInput";
import CustomDropdown from "../../atoms/CustomDropdown/CustomDropdown";

interface Todo {
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

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(formFields);
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
        <CustomDropdown/>
      </form>
    </div>
  );
};

export default TodoForm;
