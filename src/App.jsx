import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./helper/Context";

import Login from "./pages/login/Login";
import "./App.css";
import axios from "axios";
import Confirm from "./pages/confirm/Confirm";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const save = window.localStorage.getItem("username");

  const [userName, setUserName] = useState(JSON.parse(save));
  const [usersList, setUsersList] = useState({});
  const [error, setError] = useState("");
  const [click, setClick] = useState(false);
  const [reposList, setReposList] = useState([]);
  const [searchList, setSearchList] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}`, {
        headers: {
          Authorization: `token${process.env.REACT_APP_GITHUB_KEY}`,
        },
      })
      .then((res) => {
        setUsersList(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(`https://api.github.com/users/${userName}/repos`, {
        headers: {
          Authorization: `token${process.env.REACT_APP_GITHUB_KEY}`,
        },
      })
      .then((res) => {
        setReposList(res.data);
      })
      .catch((err) => console.log(err));
  }, [click]);

  const filteredRepos = reposList.filter((repo) =>
    repo.name.toLowerCase().includes(searchList.toLowerCase())
  );

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        usersList,
        setUsersList,
        click,
        setClick,
        reposList,
        setReposList,
        searchList,
        setSearchList,
        error,
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route
            path="/dashboard"
            element={<Dashboard filteredRepos={filteredRepos} />}
          />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
