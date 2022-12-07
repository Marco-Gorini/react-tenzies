import React from "react";
import "./Dice.css"

export default function Dice(props) {
    return (

        <div className={props.isSelected ? "dice--selected" : "dice"} onClick ={() => props.selectedDice(props.id,props.number)}>
            <p className="number">{props.number}</p>
        </div>

    );
}