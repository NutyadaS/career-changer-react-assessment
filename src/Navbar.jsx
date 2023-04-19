import React from "react";
// import "./Styles.css";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <a href={"/home"}>Home</a>
        </li>
        <li>
          <a href={"/owner"}>Owner</a>
        </li>
      </ul>
      <hr />
    </>
  );
};

export default Navbar;
