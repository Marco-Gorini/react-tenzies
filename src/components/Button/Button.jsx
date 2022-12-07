import React from "react";
import "./Button.css"

export default function Button(props){
    return (
        <div className="button--div">
            <button className="button" onClick={!props.endGame ? props.rollDices : props.resetGame}>
                <p>{props.endGame ? "Reset Game" : "Roll"}</p>
            </button>
        </div>
    );
}