 import "./App.css";
import Porfolio from "./components/screens/Portfolio/Portfolio";
import GetPortfolio from "./expressConnections/GET/getPortfolio";

import "./portfolio.css"

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Portfolio(props) {
  const [user, setUser] = useState(localStorage.getItem("user"))
  const [email, setEmail] = useState(localStorage.getItem("email"))
  const [user_name, setUsername] = useState(localStorage.getItem("user_name"))
  const [your_name, setrealName] = useState(localStorage.getItem("your_name"))
  const [loggedIn, setLoginIn] = useState(localStorage.getItem("loggedIn"))


  const login = () => {
    window.location.href = '/login'
  }

  return (
    <div>

      <br></br>
      <br></br>
      <br></br>

      {!loggedIn && login()}

      { loggedIn && (<h2>Current Portfolio</h2>)}
      { loggedIn && (<h5>Your Name: {your_name}</h5>)}
      { loggedIn && (<h5>Username: {user_name}</h5>)}
      { loggedIn && (<h5>Email: {email}</h5>)}
      { loggedIn && (<GetPortfolio />)}
      { loggedIn && (<div className="PortfolioInLine">
        <Link to="/buy"> <button className="PortfolioButton btn btn-dark btn ">Buy</button> </Link>
        <Link to="/sell"> <button className="PortfolioButton btn btn-dark btn">Sell</button> </Link> </div>)}
      </div>
  );
}

export default Portfolio;
 