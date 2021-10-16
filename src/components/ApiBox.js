import React from "react";
import { Link } from "react-router-dom";

const ApiBox = (props) => {
  return (
    <div
      style={{ width: "100%" }}
      className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 my-4 last:mt-30"
    >
      <div className="flex-shrink-0"></div>
      <Link to={props.link}>
        <div>
          <div className="text-xl font-medium text-orange">{props.title}</div>
          <p className="text-purple font-medium">{props.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ApiBox;
