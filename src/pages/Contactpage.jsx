import React from "react";
import Title from "../components/Title";

const Contactpage = () => {
  return (
    <div className="my-20" id="contact">
      {" "}
      <Title title={"CONTACT US"} subtitle={"We'd Love to Hear from You!"} />
      <form className="flex flex-col items-center gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          required
          className="p-3 w-[90%] md:w-[50%]  rounded-lg"
        />
        <input
          type="email"
          name="email"
          className="p-3 w-[90%] md:w-[50%] rounded-lg"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          className="p-3 w-[90%] md:w-[50%] rounded-lg resize-none"
          rows="7"
          placeholder="Your Message"
          required
        ></textarea>
        <button
          type="submit"
          className="btn bg-white text-black  hover:bg-primaryBtn"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contactpage;
