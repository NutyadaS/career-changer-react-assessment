import React, { useState } from "react";
import Layout from "./Layout";
import Admin from "./Admin";
import User from "./User";

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
    position: "Manager",
  },
];

// const Home = () => {
//   const [employees, setEmployees] = useState([...mockEmployees]);

//   const [sector, setSector] = useState("");

//   const handleClickAdmin = () => {
//     setSector(sector === "admin" ? "" : "admin");
//   };

//   const handleClickUser = () => {
//     setSector(sector === "user" ? "" : "user");
//   };

//   return (
//     <Layout>
//       <h1>Generation Thailand</h1>
//       {sector === "user" ? (
//         <h1>Home - User Sector</h1>
//       ) : sector === "admin" ? (
//         <h1>Home - Admin Sector</h1>
//       ) : (
//         <h1>Home - React Assessment</h1>
//       )}
//       <button onClick={handleClickUser}>User Home sector</button>
//       <button onClick={handleClickAdmin}>Admin Home sector</button>
//       {sector === "user" && <User employees={employees} />}
//       {sector === "admin" && (
//         <Admin employees={employees} setEmployees={setEmployees} />
//       )}
//     </Layout>
//   );
// };

// export default Home;

const Home = () => {
  const [employees, setEmployees] = useState([...mockEmployees]);

  const [sector, setSector] = useState("");

  const handleClickAdmin = () => {
    setSector("admin");
  };

  const handleClickUser = () => {
    setSector("user");
  };

  return (
    // <Layout>
    <>
      <h1>Generation Thailand</h1>

      {sector === "user" ? (
        <h1>Home - User Sector</h1>
      ) : sector === "admin" ? (
        <h1>Home - Admin Sector</h1>
      ) : (
        <h1>Home - React Assessment</h1>
      )}
      <button onClick={handleClickUser}>User Home sector</button>
      <button onClick={handleClickAdmin}>Admin Home sector</button>
      {sector === "user" && <User employees={employees} />}
      {sector === "admin" && (
        <Admin employees={employees} setEmployees={setEmployees} />
      )}
      {/* </Layout> */}
    </>
  );
};

export default Home;
