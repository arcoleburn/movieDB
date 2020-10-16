import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
