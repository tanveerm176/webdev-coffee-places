import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

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
      <Card
        title="Absolute Coffee"
        subtitle="Cute coffee shop in Brooklyn"
        image="./absolute-coffee-image.jpg"
        url = 'https://www.absolutecoffee.nyc/'
      />
    </div>
  );
};

export default App;
