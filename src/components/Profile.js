import React from "react";
import firebase from "../firebase";
import Navbar from "./Navbar";
import profile_img from "../images/profile.jpg";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Profile = ({ handleLogout }) => {
  const user = firebase.auth().currentUser;

  const handleLogout2 = () => {
    firebase.auth().signOut();
  };

  return (
    <>
      <section className="window">
        <Avatar
          style={{ height: "250px", width: "250px", margin: "20px auto" }}
          src={profile_img}
        />
        <h2 style={{ margin: "20px" }}>Profile</h2>
        <div style={{ margin: "2rem", textAlign: "left" }}>
          <h3>email: </h3>
          <p>{user.providerData[0].email}</p>
        </div>
        <div style={{ margin: "2rem", textAlign: "left" }}>
          <h3>User ID: </h3>
          <p>{user.providerData[0].uid}</p>
        </div>
        <p>total bucket items: x</p>

        {/* <Button onClick={handleLogout2}>Logout</Button> */}

        


        <Button
          onClick={handleLogout2}
          style={{ display: "flex", alignItems: "center" }}
          >
          <p>Logout</p>
          <ExitToAppIcon />
        </Button>

        <Navbar />
      </section>
    </>
  );
};

export default Profile;
