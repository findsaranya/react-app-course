 import  React  from "react";
 import  ReactDOM  from "react-dom/client";
//const React = require("react");
//const ReactDOM = require("react-dom");
const heading = React.createElement("h1", { id: "heading" }, "Hello World!! 🚀 ");

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child", key: "child" }, [
    React.createElement(
      "h1",
      { id: "sibling", key: "sibling1" },
      "Hello Child!! 🧒 "
    ),
    React.createElement(
      "div",
      { id: "sibling", key: "sibling2" },
      "I am sibling 🌹 "
    ),
  ])
);

console.log(parent);
root.render(parent);
