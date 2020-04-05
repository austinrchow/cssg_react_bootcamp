import React, { useState } from "react";
import Header from "./header.js";
import Form from "./form.js";
import Leaderboard from "./leaderboard.js";
import avatar from "./images/icon-badge-grove-2.svg";

import { css } from "emotion";
import moment from "moment";
import "./App.css";

const Donation = (props) => {
  var date = moment().format("L h:mm:ss A");

  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        color: #273654;
        background-color: #f6f6f4;
        padding: 1.5rem;
        border-bottom: 1px solid #eee;
        text-align: left !important;
        box-sizing: border-box;
        font-size: 1rem;
        font-weight: 600;
        height: 130px;
        position: relative;
      `}
    >
      <img
        src={props.avatar}
        alt="avatar"
        className={css`
          height: 100%;
        `}
      />

      <span
        className={css`
          display: flex;
          flex-direction: column;
          margin-left: 2rem;
          text-align: center;
        `}
      >
        <span
          className={css`
            display: flex;
            flex-direction: row;
            height: 40%;
            position: relative;
          `}
        >
          <span
            className={css`
              font-size: 1.5rem;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            {props.name}
          </span>

          <span
            className={css`
              background-color: #4b7330;
              border-radius: 2rem;
              margin-left: 1rem;
              padding: 0rem 1rem 0rem 1rem;
              color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            {props.numTrees} TREES
          </span>
        </span>

        <span
          className={css`
            display: flex;
            justify-content: left;
            align-items: center;
            height: 20%;
            font-size: 0.75rem;
            font-weight: 100;
            color: grey;
          `}
        >
          {date}
        </span>

        <span
          className={css`
            display: flex;
            justify-content: left;
            align-items: center;
            height: 40%;
          `}
        >
          {props.message}
        </span>
      </span>
    </div>
  );
};

const App = () => {
  const [donations, setDonations] = useState([]);

  const addDonation = (values) => {
    setDonations([
      ...donations,
      <Donation
        avatar={avatar}
        name={values[0]}
        numTrees={values[1]}
        message={values[2]}
      />,
    ]);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Form addDonation={addDonation} />
        <Leaderboard donations={donations} />
      </div>
    </div>
  );
}

export default App;
