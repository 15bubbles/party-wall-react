import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="col-md-12 row justify-content-center">
      <h1>Not Found</h1>
      <div className="col-md-12 row justify-content-center">
        <Link to="/">Home page</Link>
      </div>
    </div>
  );
};

export default NotFound;
