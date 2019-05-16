import React from "react";
import "./images.css";


const Images = ({ name, image, handleClick}) =>
  <img
    className = "click-item img-fluid"
    src = {image}
    alt = {name}
    name = {name}
    onClick = { () => handleClick(name) }
  />;

export default Images;