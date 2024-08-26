import React from "react";
import ReactDOM from "react-dom/client"


const parent = React.createElement("div",
    {id:"parent"},
   [
    React.createElement("div",
        {id:"child"},
       [
        React.createElement("h1",{},"This is Namste React "),
        React.createElement("h2",{},"I am h2 Tag")
       ] 
    
        ),
        React.createElement("div",
            {id:"child2"},
           [
            React.createElement("h1",{},"I am h1 Tag"),
            React.createElement("h2",{},"I am h2 Tag")
           ] 
        
            )
   ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent)
root.render(parent);

//isiliye JSX used krte hai  because itna chota code likhne k liye itna line 
//likhna padta hai upar se readablitity v achi nhi hoti