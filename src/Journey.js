import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from "@mui/icons-material/Instagram";

const Journey = () => {
    return(
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
        </>
    );
}

export default Journey