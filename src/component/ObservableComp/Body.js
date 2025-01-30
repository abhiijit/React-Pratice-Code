import React, { useEffect, useState } from "react";
import Observble from "../../DesignPattern/Observeble/Observble";

const Body = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUserLoggedIn = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  useEffect(() => {
    Observble.subscribe(handleUserLoggedIn);
    console.log("Body component is logged in", isLoggedIn);
    return () => {
      Observble.unSubscribe(handleUserLoggedIn);
    };
  }, [isLoggedIn]);
  const styleProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "15%",
    textAlign: "center",
  };
  return (
    <>
      <div style={styleProps}>
        <h1>
          {isLoggedIn
            ? "Welcome to home page Abhijit !....."
            : "User is not logged in. Please login to access the home page."}
        </h1>
      </div>
    </>
  );
};

export default Body;
