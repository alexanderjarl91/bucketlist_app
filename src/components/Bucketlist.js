import React from "react";
import ListItem from "./ListItem"

export default function Bucketlist() {
  return <div className="window">
    <h2 style={{marginBottom: '2rem'}}>Bucketlist</h2>
    <ListItem/>
    <ListItem/>
    <ListItem/>
  </div>;
}
