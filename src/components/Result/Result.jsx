import React, { useContext } from "react";

import AuthContext from "../Store/auth-context";

import Card from "../UI/Card/Card";

const Result = () => {
  const { totalScore, userNick } = useContext(AuthContext);

  return (
    <Card>
      <div className="">
        <h1>Congratulations, {userNick}</h1>
        <h1>Your socre:</h1>
        <h1 style={{ color: "#2196f3" }}>{totalScore}</h1>
      </div>
    </Card>
  );
};

export default Result;
