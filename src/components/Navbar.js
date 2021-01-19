import React from "react";
import "../App.css";
import { Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import CreateIcon from "@material-ui/icons/Create";

export default function Navbar({ goProfile, goHome, goAdd }) {
  return (
    <div>
      <nav className="nav">
        <Button onClick={goHome} className="nav__btn">
          <HomeIcon fontSize="large" />
        </Button>
        <Button onClick={goAdd} className="nav__btn">
          <CreateIcon />
        </Button>
        <Button onClick={goProfile} className="nav__btn">
          <PersonIcon
            fontSize="large"
            // style={{ backgroundColor: "turquoise", padding: "21% 30%" }}
          />
        </Button>
      </nav>
    </div>
  );
}
