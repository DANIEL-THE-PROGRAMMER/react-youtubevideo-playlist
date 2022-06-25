import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// routes
import { AppRoutes } from "./utils/Routes";

import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/functional">Functional</Link>
          <Link to="/class">Class Component</Link>
        </nav>
        <Routes>
          {AppRoutes &&
            AppRoutes.map((route) => {
              return <Route key={route.path} path={route.path} element={<route.component />} />;
            })}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
