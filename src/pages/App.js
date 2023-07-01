import NavBar from '../NavBar.js';
import Header from '../Header.js';
import React from "react";
const App = () => {
  return (
    <div className="flex h-screen w-screen bg-white">
      <Header />
      <NavBar />
    </div>
  );
}
export default App