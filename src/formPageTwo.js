import React, { useState } from "react";
import { css } from "emotion";

const StyledTextArea = (props) => {
    return <textarea
      className={css`
        box-sizing: border-box; 
        height: calc(2.75em + 1.75rem + 2px);
        padding-bottom: 1rem!important;
        padding-top: 1rem!important;
        display: block;
        width: 100%;
        padding: .375rem .75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        margin-bottom: 1rem;
        margin-right: 0.5rem;
        margin-top: 0.5rem;
        width: 95%;
      `}
      id = {props.id}
      value={props.value}
      onChange={(event) => props.onChange(props.id, event.target.value)}
    ></textarea>;
  }
  const DonationDetails = (props) =>  {
    return <div 
      className = {css`
        padding-left: .25rem!important;
        padding-right: .25rem!important;
        max-width: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      `}>
        <StyledTextArea id="ta1" value={props.displayName} onChange={props.onChange}/>
        <StyledTextArea id="ta2" value={props.email} onChange={props.onChange}/>
        <StyledTextArea id="ta3" value={props.message} onChange={props.onChange}/>
        <div
            id = {""}
            className = {css`
            width 100%;
            color: red;
        `}> {props.err} </div>
        <div 
          className={css`
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          width: 100%;
        `}
        > 
          <div
            className={css`
            letter-spacing: 1px;
            background-color: #f6f6f4;
            border-color: #4b7230;
            padding: .75rem 1.5rem;
            text-transform: uppercase;
            font-size: .85rem;
            border-radius: 100rem;
            color: #495057;
            margin-top: 1rem;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
            cursor: pointer;
          `}
          onClick = {() => {props.goBack()}}
          > Previous</div>
          <div
            className={css`
            letter-spacing: 1px;
            background-color: #4b7230;
            border-color: #4b7230;
            padding: .75rem 1.5rem;
            text-transform: uppercase;
            font-size: .85rem;
            border-radius: 100rem;
            color: #fff;
            margin-top: 1rem;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
            cursor: pointer;
          `}
          onClick = {() => {props.submitForm()}}
           > Submit</div>
        </div>
      </div>
  }
  
  
  
  const Second_Card = (props) => {
    const displayNamePlaceHolder = "Display Name";
    const emailPlaceHolder = "Email";
    const messagePlaceHolder = "My #TeamTrees message is..";
    const [displayName, setDisplayName] = useState(displayNamePlaceHolder);
    const [email, setEmail] = useState(emailPlaceHolder);
    const [message, setMessage] = useState(messagePlaceHolder);
    const [err, setErr] = useState("");

    const mapOfSetters = {
        "ta1": setDisplayName, 
        "ta2": setEmail,
        "ta3": setMessage
    };

    const taOnChange = (id, value) => {
        mapOfSetters[id](value);
    };

    const validatedForm = () => {
        if (document.getElementById("ta1").value === displayNamePlaceHolder) {
            setErr("Invalid Display Name. Don't use the default");
            return false;
        } else if (document.getElementById("ta2").value === emailPlaceHolder) {
            setErr("Invalid Email. Don't use the default");
            return false;
        } else if (document.getElementById("ta3").value === messagePlaceHolder) {
            setErr("Invalid Message. Don't use the default");
            return false;
        }
        return true;
    }

    const submitForm = () => {
        console.log("Submitting Form")
        if (validatedForm()) {
            const displayNameVal = document.getElementById("ta1").value;
            const emailVal = document.getElementById("ta2").value;
            const messageVal = document.getElementById("ta3").value;
            props.submit([displayNameVal, emailVal, messageVal]);
        } 
    }
    return <div 
      className={css`
      width: 576px;
      `
      }>
        <div
          className={css`
            display: flex;
            flex-direction: column;
          `}
          >
          <div
            className={css`
              border-radius: calc(.5rem - 1px) calc(.5rem - 1px) 0 0;
              flex-direction: column;
              color: #273654;
              background-color: #f6f6f4;
              padding: 1rem 1.25rem .8rem;
              border-bottom: 1px solid #eee;
              text-transform: uppercase!important;
              text-align: center!important;
              box-sizing: border-box;
              font-size: 1rem;
              font-weight: 600;
            `}
          >Details</div>
          <DonationDetails goBack={props.goBack} submitForm={submitForm} err={err} displayName={displayName} email={email} message={message} onChange={taOnChange}/>
          <div
            className={css`
              border-radius: 0 0 calc(.5rem - 1px) calc(.5rem - 1px);
              background-color: #f6f6f4;
              border-top: 1px solid #eee;
              padding: .75rem 1.25rem;
              flex-direction: column;
              font-weight: 400;
              margin-bottom: 0!important;
              text-transform: uppercase!important;
              font-size: 70%;
              text-align: center!important;
              color: #518360;
          `}
          >FAQ</div>
        </div>
      </div>
  }

export default Second_Card;