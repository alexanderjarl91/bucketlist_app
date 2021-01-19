import "./App.css";
import React, { useState, useEffect } from "react";
import firebase from "./firebase";

import Login from "./components/Login";
import Home from "./components/Home";
function App() {
  //declaring states
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  //sign in using state of email and state of password
  const handleLogin = () => {
    clearErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  //sign up using email and password
  const handleSignup = () => {
    clearErrors();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  //logout function
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  //listener to check if user is logged in
  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  //run auth listener on
  useEffect(() => {
    authListener();
  }, []);

  const header = {
    textAlign: "center",
    color: "black",
  };

  return (
    <div className="App">
      {user ? (
        <Home handleLogout={handleLogout} />
      ) : (
        <div className="login">
          <div style={header}>
            <h1>Bucketlist</h1>
            <p>Login to see and edit your bucketlist</p>
          </div>
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        </div>
      )}
    </div>
  );
}

export default App;
