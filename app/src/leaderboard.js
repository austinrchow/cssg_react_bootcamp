import React, { Component, useState } from "react";
import avatar from "./images/icon-badge-grove-2.svg";
import { css } from "emotion";
import moment from "moment";

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

const Leaderboard = () => {
  const [donations, setDonations] = useState([]);

  const addDonation = () => {
    setDonations([
      ...donations,
      <Donation
        avatar={avatar}
        name="Austin Chow"
        numTrees="60"
        message="Keep the climate alive."
      />,
    ]);
  };

  return (
    <div>
      <button onClick={addDonation}>Add Donation</button>

      <div
        className={css`
          width: 576px;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            margin: 10rem 0 10rem 0;
          `}
        >
          <div
            className={css`
              border-radius: calc(0.5rem - 1px) calc(0.5rem - 1px) 0 0;
              flex-direction: column;
              color: #4b7330;
              background-color: #f6f6f4;
              padding: 1rem 1.25rem 0.8rem;
              border-bottom: 1px solid #eee;
              text-transform: uppercase !important;
              text-align: center !important;
              box-sizing: border-box;
              font-size: 1rem;
              font-weight: 600;
            `}
          >
            DONATIONS
          </div>

          {donations}

          <div
            className={css`
              border-radius: 0 0 calc(0.5rem - 1px) calc(0.5rem - 1px);
              background-color: #f6f6f4;
              border-top: 1px solid #eee;
              padding: 0.75rem 1.25rem;
              flex-direction: column;
              font-weight: 400;
              margin-bottom: 0 !important;
              text-transform: uppercase !important;
              font-size: 70%;
              text-align: center !important;
              color: #518360;
            `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
