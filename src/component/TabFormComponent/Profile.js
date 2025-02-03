import React from "react";

const Profile = ({ data, setData }) => {
  const { name, age, email } = data;

  const handleDataChange = (e, item) => {
    setData((prevData) => ({
      ...prevData,
      [item]: e.target.value,
    }));
  };
  return (
    <>
      <div>
        <div>
          <label>Name :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => handleDataChange(e, "name")}
          />
        </div>
        <br />
        <div>
          <label>Age :</label>
          <input
            type="text"
            value={age}
            onChange={(e) => handleDataChange(e, "age")}
          />
        </div>
        <br />
        <div>
          <label>Email :</label>
          <input
            type="text"
            value={email}
            onChange={(e) => handleDataChange(e, "email")}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
