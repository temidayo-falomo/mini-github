import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import ToolNav from "../../components/toolNav/ToolNav";
import { UserContext } from "../../helper/Context";
import "./Login.css";

function Login() {
  const { userName, setUserName, click, setClick } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirm");
  };

  useEffect(() => {
    const data = window.localStorage.getItem("username");
    if (data !== null) {
      setUserName(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("username", JSON.stringify(userName));
  }, [userName]);

  return (
    <div className="Login col">
      <ToolNav />
      <form className="login-center col" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter your Github Username"
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <button className="button-53" onClick={() => setClick(!click)}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
