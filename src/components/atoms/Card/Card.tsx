import React from 'react'

interface Props {
    styling: string
    children: React.ReactNode
}


const Card = ({styling, children}:Props) => {
  return (
    <div
      className={`max-w-[90%] md:max-w-[75%] lg:max-w-[50%] mx-auto p-5 md:p-7 lg:p-10 rounded-md font-mono ${styling}`}
    >
      {children}
    </div>
  );
}

export default Card