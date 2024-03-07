import React from "react";
import Gallery from "./Gallery";
import "./App.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom"; // Import Link from 'react-router-dom' instead of '@mui/material'

export default function Header() {
  return (
    <>
      <header>
        <Link to="/" className="logo"> {/* Use Link instead of 'a' */}
          3D Workshop
        </Link>
        <a
          className="insta"
          target="_blank" // Corrected attribute value
          href="https://www.instagram.com/3dwork_shop/"
          rel="noopener noreferrer" // Add rel="noopener noreferrer" for security
        >
          <InstagramIcon style={{ fontSize: "3rem" }} />
        </a>
      </header>
      <div className="content">
        <p>
          Welcome to a captivating showcase of 3D models crafted with the
          powerful tools of Blender. In this digital gallery, we invite you to
          immerse yourself in a world where imagination knows no bounds and
          creativity takes shape in three dimensions.{" "}
        </p>
        <div className="container">
          <Link to="/journey" className="joruney">
            Our Journey
          </Link>
        </div>
        <h1 className="name"> Gallery</h1>
        <Gallery />
      </div>
    </>
  );
}
