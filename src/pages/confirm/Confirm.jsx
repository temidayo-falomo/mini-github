import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ToolNav from "../../components/toolNav/ToolNav";
import { UserContext } from "../../helper/Context";
import "./Confirm.css";

function Confirm() {
  const { usersList, setUsersList, err } = useContext(UserContext);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="Confirm">
      <ToolNav />
      {err.name === "AxiosError" ? (
        <div className="not-found">
          <h2>User Not Found</h2>
          <Link to="/">
            <button className="button-53" onClick={() => setUsersList({})}>
              Go-Back
            </button>
          </Link>
          <Link to="/confirm">
            <button className="button-53" onClick={handleRefresh}>
              Try Refreshing ?
            </button>
          </Link>
        </div>
      ) : (
        <div className="confirm-center col">
          <h2>Is This You?</h2>
          <img src={usersList.avatar_url} alt="" />
          <p>{usersList.login}</p>
          <div className="confirm-btns">
            <Link to="/dashboard">
              <button className="button-53">Yes/Continue</button>
            </Link>
            <Link to="/">
              <button className="button-53" onClick={() => setUsersList({})}>
                No/Go-Back
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Confirm;
