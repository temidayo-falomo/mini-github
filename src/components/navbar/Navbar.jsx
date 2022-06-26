import React, { useContext } from "react";
import { HiSpeakerphone } from "react-icons/hi";
import { Link } from "react-router-dom";
import { UserContext } from "../../helper/Context";
import "./Navbar.css";

function Navbar() {
  const { userName, setUserName } = useContext(UserContext);

  const unSave = window.localStorage.setItem("", JSON.stringify(""));

  const { usersList, setUsersList, searchList, setSearchList } =
    useContext(UserContext);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <nav className="navbar">
      <div className="welcome-box row">
        <img src="./assets/star.svg" alt="" />
        <h1>Welcome, {usersList.name}</h1>
      </div>

      <form className="search-box" onSubmit={handleSearchSubmit}>
        <input
          type="search"
          placeholder="Search Repos..."
          onChange={(e) => setSearchList(e.target.value)}
        />
        <button>
          <HiSpeakerphone />
        </button>
        <Link to="/">
          <button onClick={() => setUserName(JSON.parse(unSave))}>
            Sign Out
          </button>
        </Link>
      </form>
    </nav>
  );
}

export default Navbar;
