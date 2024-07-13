import React from "react";
import "./styles/App.css";
import CarList from "./components/CarList";
import Details from "./components/Details";

function App() {
  return (
    <div className="app">
      <CarList />
      <Details />
    </div>
  );
}

export default App;
