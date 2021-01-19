import React from "react";
import { Card } from "./Card"
import profile_img from "../images/profile.jpg";

export default function Bucketlist() {
  return <div className="window">
    <h2 style={{marginBottom: '2rem'}}>Bucketlist</h2>

    <Card title="Meet Terry Crews" image={profile_img}/>
    <Card title="Shake hands with Terry Crews" image={profile_img}/>
    <Card title="Be in a movie with Terry Crews" image={profile_img}/>
  </div>;
}
