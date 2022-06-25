import React from "react";

// components
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";

const App = () => {
  return (
    <div>
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
};

export default App;
