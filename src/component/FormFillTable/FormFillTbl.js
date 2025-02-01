import React, { useState, useEffect, useCallback } from "react";
import "./FormFillTbl.css";

const FormFillTbl = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const handleSubmitButton = useCallback(
    (e) => {
      e.preventDefault();
      if (!name || !age || !email) {
        alert("All fields are required!");
        return;
      }
      const value = {
        id: new Date().getTime(),
        userName: name,
        userAge: age,
        userEmail: email,
      };
      setData((prevData) => [...prevData, value]);
      setName("");
      setAge("");
      setEmail("");
    },
    [name, email, age]
  );

  const handleRowDelete = (id) => {
    setData((prevVal) => prevVal.filter((tblId) => tblId.id !== id));
  };
  return (
    <>
      <h1>Form Fill</h1>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <br />
      <label>Age</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter age"
      />
      <br />
      <label>Email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <br />
      <button type="button" onClick={handleSubmitButton}>
        Submit
      </button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.userName}</td>
                <td>{item.userAge}</td>
                <td>{item.userEmail}</td>
                <td
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => handleRowDelete(item.id)}
                >
                  Delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FormFillTbl;
