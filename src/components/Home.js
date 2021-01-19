import React, { useState } from "react";
import firebase from "../firebase";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Add from "./Add"
import Bucketlist from "./Bucketlist"
import Header from "./Header";

const Home = ({ handleLogout }) => {
  const user = firebase.auth().currentUser;

  const [currentPage, setCurrentPage] = useState("Home");

  const goHome = () => {
    setCurrentPage("Home");
    console.log(currentPage)
  };
  const goAdd = () => {
    setCurrentPage("Add");
    console.log(currentPage)
  };

  const goProfile = () => {
    setCurrentPage("Profile");
    console.log(currentPage)
  };



  return (
    <section>
        <Header />
      {/* {currentPage === 'Profile'? :} */}
      {currentPage === 'Home'? <Bucketlist/>: ''}
      {currentPage === 'Add'? <Add/>: ''}
      {currentPage === 'Profile'? <Profile/>: ''}
        

      <Navbar goProfile={goProfile} goAdd={goAdd} goHome={goHome}/>
    </section>
  );
};

export default Home;
