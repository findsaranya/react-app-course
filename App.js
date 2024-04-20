 import  React  from "react";
 import  ReactDOM  from "react-dom/client";

 //React.createElement => Object => when rendering on the dom it's converted into HTML Element

 const heading = React.createElement("h1",{id:'heading'},"Hello React 🚀 ");
 const h1 = <h1 id="title">JSX hello 🌹 </h1>;
 console.log(h1);
 console.log(heading);

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(h1);
