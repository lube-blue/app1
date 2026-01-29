import React from "react";
import { userContext } from "./context";

export default function Content() {
  let user = React.useContext(userContext);
  const contentStyle = {
    backgroundColor: "#ddd",
    textAlign: "center",
    margin: 10,
    padding: 10,
  };
  return (
    <div style={contentStyle}>
      <a href=" ">Home</a>&nbsp;-&nbsp;
      <a href=" ">Product</a>&nbsp;-&nbsp;
      <a href=" ">Contact Us</a>&nbsp;-&nbsp;&nbsp; 
      [{user}&nbsp;:&nbsp; <a href=" ">Signout</a>]
    </div>
  );
}
