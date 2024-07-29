import React from "react";

const Statistics = () => {
  return (
    <div className=" stats stats-vertical lg:stats-horizontal shadow">
      <div className="stat place-items-center">
        <div className="stat-title">Years of Experience</div>
        <div className="stat-value">4+</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title ">Clients Served</div>
        <div className="stat-value text-primary">4 </div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Completed Projects</div>
        <div className="stat-value">15+</div>
      </div>
    </div>
  );
};

export default Statistics;
