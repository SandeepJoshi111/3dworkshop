import React from "react";
import Title from "../components/Title";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Clientpage = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };
  const items = [
    <div className="flex justify-center">
      <img src="/public/images/oressa.jpg" className="w-[200px]" />
    </div>,
    <div className="flex justify-center">
      <img src="/public/images/baltra.png" className="w-[200px]" />
    </div>,
    <div className="flex justify-center">
      <img src="/images/hamro momo.jpeg" className="w-[200px]" />
    </div>,
    <div className="flex justify-center">
      <img src="/images/lostmandu.png" className="w-[200px]" />
    </div>,
  ];
  return (
    <div className="my-20">
      <Title title={"OUR CLIETNS"} subtitle={"Trusted by Leading Brands"} />
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </div>
  );
};

export default Clientpage;
