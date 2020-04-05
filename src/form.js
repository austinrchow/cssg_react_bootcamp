import React, { useState } from "react";
import First_Card from "./formPageOne";
import Second_Card from "./formPageTwo";


const Form = (props) => {
  const [firstCard, setfirstCard] = useState(true);
  const [numTrees, setNumTrees] = useState(null);

  const submitSecondForm = (values) => {
    //callback to leaderboard
    setfirstCard(true);
    console.log(values)
    console.log(numTrees)
    props.addDonation([values[0], numTrees, values[2]])
  }

  const goBack = () => {
    setfirstCard(true);
  }

  const submitFirstForm = (value) => {
    //callback to leaderboard
    setNumTrees(value)
    setfirstCard(false);
  }

  if (firstCard) {
    return <First_Card submit={submitFirstForm}/>;
  } else {
    return <Second_Card goBack={goBack} submit={submitSecondForm}/>;
  }
 }

export default Form;
