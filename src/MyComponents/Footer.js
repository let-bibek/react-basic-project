import React from "react";

export const Footer = () => {
 
  const myStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#DAA520",
    textDecoration:"none",
    fontSize:"14px",
  };
  return (
    <footer className="bg-dark text-light py-3">
      <a className="text-center" style={myStyle}>Copyright &copy;MyTodoApp.com</a>
    </footer>
  );
};
