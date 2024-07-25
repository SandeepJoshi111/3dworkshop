import React from "react";
import Statistics from "../components/Statistics";
import Button from "../components/Button";

const Homepage = () => {
  return (
    <div className="grid grid-cols-1 items-center h-[100vh] lg:grid-cols-2">
      <div className="">
        {" "}
        <img
          src="/images/astronaut-modified-removebg-preview.png"
          className="sm:w-[200px] md:w-[400px] lg:w-[600px]"
        ></img>
      </div>
      <div className=" lg:w-[600px] flex flex-col gap-5 justify-center">
        <p className="text-[2rem] lg:text-[3.5rem] font-extrabold text-textPrimary">
          Welcome to Your <span className="text-primary">3D Modeling</span>{" "}
          Journey
        </p>
        <p className="text-[1.3rem] text-primary">
          Transforming Your Vision into Reality{" "}
        </p>
        <p className="text-[1.1rem]">
          Explore our professional 3D modeling services designed to bring your
          ideas to life with stunning precision and creativity.
        </p>
        <div className="flex justify-center gap-5 text-[1.1rem]">
          <Button title="Explore" />
          <Button
            title="Contact Us"
            classname={" bg-white text-black  hover:bg-primaryBtn"}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
