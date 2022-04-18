import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

import './App.css';

function App() {
  return (
   
    <div className="App">
      {/* <MainPage /> */}
      <NavBar />
          <Routes>
                <Route exact path ="/" element= { <Home /> } /> 
                <Route path ="/about" element= { <About  /> } /> 
                <Route path="/mainpage" element= { <MainPage />} />
          </Routes>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
