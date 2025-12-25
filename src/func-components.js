import React from "react";

export function Header() {
  const aStyle = {
    display: "inline-block",
    color: "blue",
    textDecoration: "none",
  };

  return (
    <div style={{ backgroundColor: "#ccc" }}>
 
      <a href="/" style={aStyle}>Home</a>{" "}
      |&nbsp;
      <a href="/react" style={aStyle}>React</a>{" "}
      |&nbsp;
      <a href="/react-native" style={aStyle}>React Native</a>
    </div>
  );
}

export function Content() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Hello React & React Native</h2>
      <br /><br /><br />
    </div>
  );
}

export const Footer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      &copy; {new Date().getFullYear()} All rights reserved
    </div>
  );
};