import React from "react";
import { UserContext } from "../../helper/Context";
import Card from "../card/Card";
import "./Repos.css";

function Repos(props) {
  return (
    <>
      {/* <div className="repos-top">Your Repositories : </div> */}
      <div className="repos">
        <div className="repos-list">
          {props.filteredRepos.map((data, index) => {
            return <Card key={index} data={data} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Repos;
