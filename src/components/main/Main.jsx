import React from "react";
import Navbar from "../navbar/Navbar";
import Repos from "../repos/Repos";
import "./Main.css";

function Main(props) {
  return (
    <section className="main col">
      <Navbar />
      <Repos filteredRepos={props.filteredRepos}/>
    </section>
  );
}

export default Main;
