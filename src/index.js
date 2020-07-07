var React = require("react");
var ReactDom = require("react-dom");

ReactDom.render(<h1>This is react</h1>, document.getElementById("root"));

var h1 = document.createElement("h1");
h1.innerHTML = "This is react";
document.getElementById("root").appendChild(h1);
