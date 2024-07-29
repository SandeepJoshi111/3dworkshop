import React from "react";
import Button from "../components/Button";
import portfolios from "../datas/portfolio";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="my-10">
      <Link to={"/"}>
        <Button title={"Back"} />
      </Link>
      <div className="mt-10">
        <div className="grid grid-cols-3 gap-4">
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className="w-full">
              <LazyLoad height={200} offset={100}>
                <img
                  src={portfolio.image}
                  alt={`Portfolio ${portfolio.id}`}
                  className="w-[500px] h-[400px] object-cover "
                  loading="lazy"
                />
              </LazyLoad>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
