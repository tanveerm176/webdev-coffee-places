import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Container from "./components/Container";

const App = () => {
  return (
    <div className="App">
      <img
        src="./coffee-beans.jpg"
        className="custom-image"
        alt="image of drawn coffee beans"
      />
      <h1>Coffee Places in NYC</h1>
      <h2>Here are some of my favorite coffee places in NYC!</h2>
      <Container></Container>
    </div>
  );
};

export default App;
