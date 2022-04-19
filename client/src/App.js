import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import NewCharacterForm from "./NewCharacterForm";
import Login from "./Login";
import LoginForm from "./LoginForm";
// import SignUpForm from "./SignUpForm";

import './App.css';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <LoginForm onLogin={setUser} />;

  return (
  
    <div className="App">
      {/* <MainPage /> */}
      <NavBar user={user} setUser={setUser} />
          <Routes>
                <Route exact path ="/" element= { <Home /> } /> 
                <Route path ="/about" element= { <About  /> } /> 
                <Route path ="/login" element= { <Login setUser={setUser} /> } />
                <Route path="/mainpage" element= { <MainPage />} />
                <Route path="/newcharacterform" element= { <NewCharacterForm /> } />
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
