import React, { useEffect, useState } from "react";

const IncDecNum = () => {
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    const res = await fetch("https://fakestoreapi.com/users");
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleInc = (id) => {
    const userInc = user.map((val) =>
        val.id === id
          ? {
              ...val,
              address: { ...val.address, number: val.address.number + 1 },
            }
          : val
      );
    setUser(userInc);
  };

  const handleDec = (id) => {
    const userInc = user.map((val) =>
        val.id === id
          ? {
              ...val,
              address: { ...val.address, number: val.address.number - 1 },
            }
          : val
      );
    setUser(userInc);
  };
  return (
    <>
      {user &&
        user.map((item) => {
          return (
            <>
              <ul
                key={item.id}
                style={{
                  listStyleType: "none",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <li>FirstName : {item.name.firstname}</li>
                <li>LastName :{item.name.lastname}</li>
                <li>City :{item.address.city}</li>
                <li>Number :{item.address.number}</li>
                <button
                  type="button"
                  onClick={() => handleInc(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  Inc
                </button>
                <button type="button" onClick={() => handleDec(item.id)}>Dec</button>
              </ul>
            </>
          );
        })}
    </>
  );
};

export default IncDecNum;
