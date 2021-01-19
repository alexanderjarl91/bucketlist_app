import React from "react";
import Bucket from "../images/29962-200.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";

export default function Header() {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginRight: "1rem",
      }}
    >
      <img className="logoImg" src={Bucket}></img>
      <Button style={{ display: "flex", alignItems: "center" }}>
        <p>Logout</p>
        <ExitToAppIcon />
      </Button>
    </div>
  );
}
