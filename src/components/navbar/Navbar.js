import React from "react";


const Navbar = (props)  => {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="index.html">Clicky Game</a>
 
  <nav className = "navbar-brand">
    <ul>
      <li className = {props.messageClass}>{props.message}</li>
      <li>Score: {props.score} | Top Score: {props.topscore}</li>
    </ul>
  </nav>
  
</nav>
)
}



export default Navbar;