import {ChangeEvent} from 'react'

interface Props {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  type: string;
  placeholder: string;
  name: string
}

const CustomInput = ({ label, type, required, placeholder, onChange, name }: Props) => {
  return (
    <div>
      <label className="text-white font-semibold" htmlFor={name}>{label}:</label>
      <input
        type={type}
        className=" px-3 py-2 block w-full rounded-md focus:outline-0 border border-transparent text-lg focus:border-darkgray placeholder:text-lg transition-all duration-150"
        required={required}
        placeholder={placeholder}   
        name={name} 
        id={name}
        onChange={onChange}  />
    </div>
  );
};

export default CustomInput;
