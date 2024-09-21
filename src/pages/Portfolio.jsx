import Button from "../components/Button";
import CustomCursor from "../components/CustomCursor";
import portfolios from "../datas/portfolio";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <CustomCursor />
      <div className="my-10">
        <Link to={"/"}>
          <Button title={"Back"} />
        </Link>
        <div className="mt-10">
          <div className="columns-[300px] ">
            {portfolios.map((portfolio) => (
              <div key={portfolio.id} className="w-full">
                <LazyLoad height={200} offset={100} once>
                  <img
                    src={portfolio.image}
                    srcSet={`${portfolio.image} 500w, ${portfolio.image} 1000w`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt={`Portfolio ${portfolio.id}`}
                    className="w-full mb-4"
                    loading="lazy"
                  />
                </LazyLoad>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
