import React from "react";
import auth from "../auth";
const LandingPage = props => {
  console.log(props);
  return (
    <div>
      <h2>Landing Page</h2>
      <button
        onClick={() => {
          auth.login(() => {
            props.history.push("/app");
          });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LandingPage;
