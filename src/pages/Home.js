import React from "react";
import "../styles/Home.css"
import { Link } from "react-router-dom";

function Home() {
  return(
    <div className="home">
      <div className="headercontainer">
        <h1>ITALIAN Pizaas</h1>
        <p>PIZZA TO FIT ABY TASTE</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
      </div>
    </div>

  )
}

export default Home;
