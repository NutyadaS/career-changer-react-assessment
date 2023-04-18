import Layout from "./Layout";
import React, { useState } from "react";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  return (
    <Layout>
      <h1>Generation Thailand</h1>
      <h1>React - Assessment</h1>
      <button>User Home Sector</button>
      <button>Admin Home Sector</button>
    </Layout>
  );
};

export default Home;
