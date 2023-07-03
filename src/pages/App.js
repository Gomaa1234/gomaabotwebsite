import NavBar from '../NavBar.js';
import Header from '../Header.js';
import Body from '../Body.js';
import React from "react";
const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <NavBar />
      <Body />
    </div>
  );
}
export default App