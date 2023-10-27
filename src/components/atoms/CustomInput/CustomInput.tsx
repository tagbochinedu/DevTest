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

const CustomInput = ({ label, type, required, placeholder, onChange, name,value }: Props) => {
  return (
    <div className='mb-3'>
      <label className="text-white font-semibold" htmlFor={name}>{label}</label>
      <input
        type={type}
        className=" px-1.5 md:px-3 py-1 md:py-2 block w-full rounded-md focus:outline-0 border border-transparent text-base md:text-lg break-words focus:border-darkgray placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400 transition-all duration-150"
        required={required}
        placeholder={placeholder}   
        name={name} 
        value={value}
        id={name}
        maxLength={30}
        onChange={onChange}  />
    </div>
  );
};

export default CustomInput;
