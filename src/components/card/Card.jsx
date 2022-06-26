import React from "react";
import { MdLanguage } from "react-icons/md";
import "./Card.css";

function Card(props) {
  const colors = ["#82B4FF", "#FF93F4", "#FFFA82", "#DEFF82", "#FF9993"];

  return (
    <div className="card col">
      <header
        className="card-header row"
        style={{
          background: `${colors[Math.floor(Math.random() * colors.length)]}`,
        }}
      >
        <h4>{props.data.name}</h4>
        <div>
          <img src="./assets/tip.svg" alt="" className="tip" />
        </div>
      </header>
      <div className="card-content col">
        <p>{props.data.description}</p>
        <div className="card-bottom row">
          <div className="div">
            <MdLanguage />
            <span>{props.data.language}</span>
          </div>
          <a
            href={props.data.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >{`<View Code />`}</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
