import React from "react";
import "./Main.css"
import Dice from "../Dice/Dice";
import Button from "../Button/Button";
import Data from "../Data"

export default function Main() {

    const[dices,setDices] = React.useState(Data);
    const[endGame,setEndGame] = React.useState(false);
    const[firstChosenNumber,setFirstChosenNumber] = React.useState(0);

    function selectedDice(idDice,numberDice){
        const currentFirstChosenNumber = firstChosenNumber === 0 ? numberDice : firstChosenNumber;
        const currentDices = dices.map((dice) => {
            return dice.id === idDice && numberDice === firstChosenNumber ? {...dice, isSelected: true} : dice
        })
        const count = currentDices.filter(dice => dice.isSelected)
        setFirstChosenNumber(currentFirstChosenNumber)
        setDices(currentDices)
        setEndGame(prevEndGame => count.length === 10)
    }

    function rollDices(){
        setDices(prevDices => {
            return prevDices.map((dice) => {
                return dice.isSelected ? dice : {...dice,number : Math.floor(Math.random() * 6) + 1};
            })
        })
    }

    function resetGame(){
        const resettedDices = dices.map(dice => {
            return {...dice,number : Math.floor(Math.random() * 6) + 1,isSelected : false}
        })
        setEndGame(false)
        setFirstChosenNumber(0)
        setDices(resettedDices)
    }

    

    let dicesFirstRow = dices.filter(item => item.id <= 5).map(item => {
        return (
            <Dice 
            key = {item.id}
            id = {item.id}
            number = {item.number}
            isSelected = {item.isSelected}
            selectedDice = {selectedDice}
            />
        )
    })

    let dicesSecondRow = dices.filter(item => item.id > 5).map(item => {
        return (
            <Dice 
            key = {item.id}
            id = {item.id}
            number = {item.number}
            isSelected = {item.isSelected}
            selectedDice = {selectedDice}
            />
        )
    })



    return (
        <div className="main--section">

            <div className="text">

                <h3 className="title">Tenzies</h3>

                <div className="text--div">
                    <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                </div>

            </div>

            <div className="dices-space">

                <div className="row">
                    {dicesFirstRow}
                </div>

                <div className="row">
                    {dicesSecondRow}
                </div>

            </div>

            <Button
            rollDices = {rollDices}
            endGame = {endGame}
            resetGame = {resetGame}
            />


        </div>
    )
}