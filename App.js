const heading = React.createElement("h1",{id:"heading"},"Hello World!!");

console.log(heading);
const root  = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);


root.render(heading);

const parent = React.createElement("div",{id:"parent"},
[
    React.createElement("div",{id:"child2",key:"child1"},[
    React.createElement("h1",{id:'sibling',key:"sibling1"},"Hello Child!!"),
    React.createElement("h2",{id:'sibling',key:"sibling2"},"I am sibling")
]),
React.createElement("div",{id:"child2",key:"child2"},[
    React.createElement("h1",{id:'sibling',key:"sibling3"},"Hello Child!!"),
    React.createElement("h2",{id:'sibling',key:"sibling4"},"I am sibling")
])

]
);

const sample = React.createElement("h3",{id:'sample'},"Sample text");
//const sampleDiv = React.createRoot(document.getElementById('sample'))
//sampleDiv.render(sample)



console.log(parent);
root.render(parent);
//root.render(sample)

// without react 
/**
 * const heading = document.createElement("h1")
 * heading.innerHTML = "Hello world from java script"
 * 
 * const root = document.getElementById("root")
 * root.appendChild(heading)
 * 
 */