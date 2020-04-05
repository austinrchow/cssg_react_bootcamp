import React, { Component } from "react";
import { css, jsx } from "emotion";
import title_img from "./images/logo-teamtrees-full-alt.svg";
import astronaut from "./images/astronaut-sign.svg";
import spaceship from "./images/spaceship.svg";
import underline from "./images/counter-underline-light.svg";

class Header extends Component {
  render() {
    return (
      <div className="home">
        <div className="col-1">
          <img className="spaceship" src={spaceship} alt="spaceship" />
        </div>

        <div className="col-2">
          <img className="trees" src={title_img} alt="header" />
          <p className="sub-header">
            We did it! But that doesn't mean we're done. Come back anytime you
            feel like planting a tree!
          </p>
          <div className="counter">
            <div id="totalTrees" className="counter">
              21,803,427
            </div>
            <div id="trees_planted">TREES PLANTED</div>
            <img id="underline" src={underline} alt="underline" />
            <div id="plant_button">Planting Projects</div>
          </div>
        </div>

        <div className="col-3">
          <img className="astronaut" src={astronaut} alt="astronaut" />
        </div>
      </div>
    );
  }
}

export default Header;
