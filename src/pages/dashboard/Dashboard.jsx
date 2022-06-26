import React from "react";
import Main from "../../components/main/Main";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Dashboard.css";

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <Sidebar />
      <Main filteredRepos={props.filteredRepos} />
    </div>
  );
}

export default Dashboard;
