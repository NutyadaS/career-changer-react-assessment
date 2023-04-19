import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href={"/home"}>Home</a>
        </li>
        <li>
          <a href={"/owner"}>Owner</a>
        </li>
      </ul>
      <hr />
    </nav>
  );
};

export default Navbar;
