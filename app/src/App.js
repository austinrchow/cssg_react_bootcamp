import React from "react";
import { css, jsx } from "emotion";
import styled from "emotion";

import Header from "./header.js";
import Form from "./form.js";
// import Leaderboard from "./leaderboard.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Form />
        {/* <Leaderboard /> */}
      </div>
    </div>
  );
}

export default App;
