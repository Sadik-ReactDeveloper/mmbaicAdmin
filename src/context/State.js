import React, { useEffect, useState } from "react";
import UserContext from "./Context";

const State = (props) => {
  const [UserData, setUserData] = useState({});
  let userCredential = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    let userCredential = JSON.parse(localStorage.getItem("userData"));
    console.log(userCredential);
    setUserData(userCredential);
  }, []);

  return (
    <UserContext.Provider
      value={{
        setUserData,
        user: JSON.parse(localStorage.getItem("userData")),
        UserData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default State;
