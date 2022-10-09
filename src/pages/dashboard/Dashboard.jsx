import React from "react";
import { useNavigate } from "react-router-dom";
import Main from "../../components/main/Main";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Dashboard.css";

function Dashboard(props) {
  const navigate = useNavigate();
  if (
    !localStorage.getItem("github-username") ||
    localStorage.getItem("github-username") === "null"
  ) {
    navigate("/");
  }
  return (
    <div className="Dashboard">
      <Sidebar />
      <Main filteredRepos={props.filteredRepos} />
    </div>
  );
}

export default Dashboard;
