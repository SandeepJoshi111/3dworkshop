import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex fixed top-0 z-10 justify-between w-full bg-black -mx:[15px] md:-mx-[30px] lg:-mx-[60px] py-3">
      <div className="navbar-start flex">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">3D Workshop</a>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 flex items-center">
          <li>
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li>
            <a href="https://www.instagram.com/3dwork_shop/" target="_blank">
              <Icon icon="lets-icons:insta" className="size-6" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
