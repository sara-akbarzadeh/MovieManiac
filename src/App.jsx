import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>Main content</main>
    </div>
  );
};

export default App;
