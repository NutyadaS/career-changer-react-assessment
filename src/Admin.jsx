import React from "react";
import Layout from "./Layout";
import { useState } from "react";
import { useEffect } from "react";
import "./Admin.css";

const Admin = (props) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  // const [inputV, setInputV] = useState("");

  const createUser = () => {
    if (name !== " " && lastname !== "" && position !== "") {
      const newEmployee = {
        name: name,
        lastname: lastname,
        position: position,
      };
      props.setEmployees([...props.employees, newEmployee]);
    }
  };

  // const handleUserInput = (event) => {
  //   setInputV(event.target.value);
  // };

  // const resetInputField = () => {
  //   setInputV("");
  // };

  const deleteUser = (index) => {
    const deleteList = [...props.employees];
    deleteList.splice(index, 1);
    props.setEmployees(deleteList);
  };

  const deleteAll = (index) => {
    const deleteAllList = [...props.employees];
    deleteAllList.splice(index);
    props.setEmployees(deleteAllList);
  };

  useEffect(() => {
    setName("");
    setLastname("");
    setPosition("");
  }, [props.employees]);

  return (
    <>
      <div class="container">
        <label>Create User Here</label>
        <br />
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(event) => {
            setLastname(event.target.value);
          }}
          value={lastname}
          type="text"
          placeholder="Last Name"
        />
        <input
          onChange={(event) => {
            setPosition(event.target.value);
          }}
          value={position}
          type="text"
          placeholder="Position"
        />
        <br />
        <button onClick={createUser}>Save</button>
      </div>
      <br />
      <table>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
          <th>Action</th>
        </tr>
        {props.employees.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.lastname}</td>
              <td>{item.position}</td>
              <td>
                <button onClick={() => deleteUser(index)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
      <button onClick={deleteAll}>Delete All</button>
    </>
  );
};

export default Admin;
