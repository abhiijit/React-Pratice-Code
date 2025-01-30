import React, { useState, useEffect } from "react";
import Observble from "../../DesignPattern/Observeble/Observble";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUserLoggedIn = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  useEffect(() => {
    Observble.subscribe(handleUserLoggedIn);
    console.log("Header component is logged in", isLoggedIn);
    return () => {
      Observble.unSubscribe(handleUserLoggedIn);
    };
  }, [isLoggedIn]);
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#333",
          color: "white",
        }}
      >
        <h1>My Application</h1>
        {isLoggedIn ? (
          <button
            style={{ padding: "5px 10px", cursor: "pointer" }}
            onClick={() => Observble.notify(false)}
          >
            {" "}
            Logout
          </button>
        ) : (
          <button
            style={{ padding: "5px 10px", cursor: "pointer" }}
            onClick={() => Observble.notify(true)}
          >
            Login
          </button>
        )}
      </header>
    </>
  );
};

export default Header;
