import React from "react";

import Button from "../components/Button";
import State from "../components/State";

const Home = ({ count }) => {

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button />
      <State />
    </div>
  );
};

export default Home;
