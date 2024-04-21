import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object => when rendering on the dom it's converted into HTML Element

const heading = React.createElement(
  "h1",
  { id: "heading", className: "title" },
  "Hello React 🚀 "
);

const Title = () => <h1>Title component 🎫 </h1>;
const HeadingComponent = () => (
  <div id="container">
    <h1 id="title" className="title">
      JSX hello 🌹{" "}
    </h1>
    <Title />
  </div>
);

console.log(<HeadingComponent />);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
