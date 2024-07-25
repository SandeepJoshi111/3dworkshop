import React from "react";
import Title from "../components/Title";
import Card from "../components/Card";
import services from "../datas/services";
const Servicepage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Title title="SERVICES" subtitle="Accelerate Your Modeling!" />

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 w-[full] ">
        {services.map((service) => (
          <Card
            key={service.id} // Ensure each card has a unique key
            title={service.title}
            icon={service.icon}
            description={service.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Servicepage;
