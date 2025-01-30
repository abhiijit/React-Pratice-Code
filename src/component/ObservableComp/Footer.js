import React, { useEffect, useState } from "react";
import Observble from "../../DesignPattern/Observeble/Observble";

const Footer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUserLoggedIn = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  useEffect(() => {
    Observble.subscribe(handleUserLoggedIn);
    console.log("Footer component is logged in", isLoggedIn);
    return () => {
      Observble.unSubscribe(handleUserLoggedIn);
    };
  }, [isLoggedIn]);
  return (
    <>
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#333",
          color: "white",
        }}
      >
        <p>
          &copy;{" "}
          {isLoggedIn
            ? "2025 My Application. All rights reserved"
            : "2024 My Application. All rights reserved."}
        </p>
      </footer>
    </>
  );
};

export default Footer;
