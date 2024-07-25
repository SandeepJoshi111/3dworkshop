import React from "react";
import Title from "../components/Title";
import Statistics from "../components/Statistics";

const Aboutpage = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <Title title={"ABOUT US "} subtitle={"Our Journey"} />
      <div className="text-textPrimary w-[1200px]  text-justify text-[1.1rem] mb-10">
        <p>
          The COVID-19 lockdown presented many difficulties but ultimately
          revealed what we truly wanted to pursue in life. What began as an
          ordinary interest in 3D modeling soon transformed into our primary
          goal. Initially working part-time, we took on various freelance jobs,
          seizing the opportunity to enhance and refine our skills. Alongside
          our practical work, we also ventured into teaching, sharing our
          knowledge and experiences with others. Our journey has been marked by
          creativity, determination against all odds, and a steadfast commitment
          to delivering high-quality services. Today, we are proud of how far
          we've come and are eager to extend our expertise to organizations with
          similar values.
        </p>
      </div>
      <Statistics />
    </div>
  );
};

export default Aboutpage;
