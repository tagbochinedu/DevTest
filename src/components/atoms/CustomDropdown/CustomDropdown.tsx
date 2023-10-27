import { useState } from "react";

interface Props {
  select: (category: string) => void;
  category: string
}

const CustomDropdown = ({ select, category }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-10 ${
          open ? "" : "hidden"
        }`}
        onClick={() => {
          setOpen(false);
        }}
      />
      <label className="text-white font-semibold">Category:</label>
      <div
        className={`relative z-20 border text-base md:text-lg  px-1.5 md:px-3 py-1 md:py-2 bg-white  ${
          open
            ? "rounded-b-none rounded-t-lg"
            : "rounded-lg transition-all ease-linear duration-150"
        } 
       ${
         category !== "Select a Category"
           ? "border-darkgray text-dark"
           : "focus:text-dark text-gray-400 focus:border-darkgray"
       }
        `}
        tabIndex={0}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {category}
      </div>

      <div
        className={`z-20 absolute bg-white rounded-b-lg left-0 right-0 overflow-hidden transition-all ease-linear duration-150 ${
          open ? "h-[180px] md:h-[220px]" : "h-0"
        }`}
      >
        {["Chores", "Work", "Family", "Travel", "Tradition"].map(
          (item, index) => (
            <p
              key={index}
              className="text-lg px-1.5 md:px-3 py-1 md:py-2 hover:bg-[rgba(168,146,238,0.2)]"
              onClick={() => {
                setOpen(false);
                select(item)
              }}
            >
              {item}
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
