import { Icon } from "@iconify/react";
import React from "react";

const Card = ({ title, icon, description }) => {
  return (
    <div className="card bg-base-100 shadow-xl border-[1px] p-3 border-primaryBtn rounded-lg ">
      <div className="card-body flex justify-center">
        <div className="flex justify-center items-center flex-col text-primary ">
          <Icon icon={icon} className="size-14 mb-2" />
          <h2 className="card-title text-[1.3rem] text">{title}</h2>
        </div>
        <p className="text-[1.1rem] text-justify">{description}</p>
      </div>
    </div>
  );
};

export default Card;
