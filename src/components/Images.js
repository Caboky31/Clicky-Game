import React from "react";


const Images = ({ name, image, onClick}) =>
  <img
    className = "click-item img-fluid"
    src = {image}
    alt = {name}
    name = {name}
    onClick = { () => onClick(name) }
  />

export default Images;