import React, { useState } from "react";
import { useEffect } from "react";
import Layout from "./Layout";

// function User(props) {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const data = fetchData()
//     setUsers(data)
// }, [])
// <Layout>
//   <h1>Generation Thailand</h1>
//   <h1>Home - User Sector</h1>
//   <button>User Home Sector</button>
//   <button>Admin Home Sector</button>
//   <br />
//   <br />
// </Layout>
// }

const User = (props) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Full name</th>
        <th>Position</th>
      </tr>
      {props.employees.map((item) => {
        return (
          <tr>
            <td>{item.name}</td>
            <td>{item.fullname}</td>
            <td>{item.position}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default User;
