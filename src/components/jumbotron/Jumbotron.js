import React from "react";
import "./jumbotron.css"

const Jumbotron = (props) => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Would you like to play a game?</h1>
            <p className="lead">Please select an image to begin. Don't click the same image twice! Or you lose and nothing will happen in your life.</p>
            <hr className="my-4"/>
           
        </div>
            )
        }
        
export default Jumbotron;