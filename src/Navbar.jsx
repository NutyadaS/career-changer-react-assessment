import React from "react";

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
