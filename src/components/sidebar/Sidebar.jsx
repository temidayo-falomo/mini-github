import React, { useContext } from "react";
import { UserContext } from "../../helper/Context";
import "./Sidebar.css";
import { MdLocationPin } from "react-icons/md";
import { RiUserFollowLine } from "react-icons/ri";

function Sidebar() {
  const { usersList } = useContext(UserContext);
  return (
    <div className="sidebar col">
      <div className="sidebar-top">
        <img src="./assets/logo.svg" alt="" />
        <img src="./assets/tip.svg" alt="" className="tip" />
      </div>

      <div className="sidebar-center col">
        <img src={usersList.avatar_url} alt="" />
        <h3>{usersList.name}</h3>
        <span>
          <a
            href={usersList.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{usersList.login}
          </a>
        </span>

        <div className="followers row">
          <span>
            <RiUserFollowLine /> {usersList.followers} followers
          </span>
          <span>|</span>
          <span>
            <RiUserFollowLine /> {usersList.following} following
          </span>
        </div>

        <div className="row">
          <span>
            <MdLocationPin style={{ color: "red" }} />
            {usersList.location ? usersList.location : "null"}
          </span>
        </div>

        <p>{usersList.bio}</p>
      </div>

      <div className="advert-box">
        <div className="box col">
          <img src="./assets/tip.svg" alt="" className="tip" />
          <p>Built with ❤️ by Temidayo Falomo.</p>
          <a
            href="https://github.com/temidayo-falomo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button-53 box-button">Follow on Github</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
