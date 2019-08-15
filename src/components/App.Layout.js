import React from "react";
import auth from "../auth";
const AppLayout = props => {
  return (
    <div>
      <h2>AppLayout</h2>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default AppLayout;
