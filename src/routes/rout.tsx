import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const Rout = () => {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<>{route.header}</>}
            />
          ))}
        </Routes>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<>{route.main}</>} />
          ))}
        </Routes>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<>{route.bottom}</>}
            />
          ))}
        </Routes>
      </Router>
    </>
  );
};

export default Rout;
