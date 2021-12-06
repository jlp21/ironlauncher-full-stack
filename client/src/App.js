import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";

class App extends React.Component {
  state = {};

render() {
  return (
    <div className="App">
    <Navbar></Navbar>
      <Routes>
        {routes({}).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}
}

export default App;
