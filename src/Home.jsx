import Layout from "./Layout";
import React, { useState } from "react";
import User from "./User";
import Admin from "./Admin";

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

// const [employees, setEmployees] = useState([

// ]);
// const [sector, setSector] = useState();

// const handleClickEmployees = function (event) {
//   setEmployees(event.target.value);
// };

// function handleClickUser() {
//   User.push("./User");
// }

// export default function Home() {
//   const navigate = useNavigate();
//   navigate("/");

//   // const Home = () => {
//   const navigateToUser = () => {
//     navigate("/user");
//   };

//   const navigateToAdmin = () => {
//     navigate("/admin");
//   };

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
    <Layout>
      <h1>Generation Thailand</h1>
      {sector === "user" ? (
        <h1>User</h1>
      ) : sector === "admin" ? (
        <h1>Admin</h1>
      ) : (
        <h1>React - Assessment</h1>
      )}

      <button onClick={handleClickUser}>User Home Sector</button>
      <button onClick={handleClickAdmin}>Admin Home Sector</button>
      {sector === "user" && <User employees={employees} />}
      {sector === "admin" && <Admin employees={employees} />}
    </Layout>
  );
};
export default Home;
