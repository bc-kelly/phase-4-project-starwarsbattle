import { useState } from "react";
// import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
// import { Button } from "../styles";
import "./Login.css"

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <wrapper className= "login">
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <divider />
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <divider />
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </wrapper>
  );
}


export default Login;