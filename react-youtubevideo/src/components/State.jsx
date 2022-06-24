import React from "react";

const State = () => {
  const data = {
    name: "React",
    props: "Flexible",
  };
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.props}</div>
    </div>
  );
};

export default State;
