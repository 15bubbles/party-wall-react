import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../reducers";
import { AuthenticationState } from "../actions/types";

const Navigation = () => {
  const { isAuthenticated, user } = useSelector(
    (state: RootState): AuthenticationState => state.auth
  );

  return (
    <nav className="navbar navbar-expand navbar-light bg-light justify-content-between">
      <Link to="/" className="navbar-brand">
        PartyWall
      </Link>
      {isAuthenticated ? (
        <ul className="nav justify-content-end">
          <li className="nav-item ml-4">
            Logged in as{" "}
            {user
              ? `${user.lastName}, ${user.firstName.substring(0, 1)}.`
              : "user"}
          </li>
          <li className="nav-item ml-4">
            <Link to="/login">Sign out</Link>
          </li>
        </ul>
      ) : (
        <ul className="nav justify-content-end">
          <li className="nav-item ml-4">
            <Link to="/register">Sign up</Link>
          </li>
          <li className="nav-item ml-4">
            <Link to="/login">Sign in</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
