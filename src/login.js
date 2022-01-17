import React, { useState, useRef } from "react";
import { users } from "./data.json";

const Login = () => {
  const [login, setLogin] = useState("");

  const uName = useRef("");
  const pswd = useRef("");

  console.log(uName.current.value, pswd.current.value);

  const handleClick = (e) => {
    e.preventDefault();
    let checkUser = users.find(
      (item) =>
        item.email === uName.current.value &&
        item.password === pswd.current.value
    );
    if (checkUser) {
      console.log("User is logged in");
      setLogin("Logged in successfuly");
    } else {
      console.log("User is not logged in");
      setLogin("Login failed");
    }
  };
  console.log(users);
  return (
    <div>
      <p>Enter Username</p>
      <input ref={uName} />
      <p>Enter Password</p>
      <input type="password" ref={pswd} />
      <button onClick={handleClick}>Login</button>
      <label>{login}</label>
    </div>
  );
};

export default Login;
