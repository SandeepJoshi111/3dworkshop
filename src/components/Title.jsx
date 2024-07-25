import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div className="flex justify-center flex-col items-center my-[30px]">
      <p className="text-primary text-[1.2rem] font-semibold">{title}</p>
      <p className="text-[2.5rem] text-textPrimary font-extrabold">
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
