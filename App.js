<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client"
=======
// const heading = React.createElement("h1", 
//     {id:"heading"},
//      "Hello World from React");

//      console.log(heading)


/**
 * 
 * <div id= "parent">
 *  <div id = "child">
 *      <h1> I'm h1 tag</h1>
 *      <h2> I'm h2 tag</h2>
 * </div>
 * <div id = "child2">
 *      <h1> I'm h1 tag</h1>
 *      <h2> I'm h2 tag</h2>
 * </div>
 * </div>
 * 
 * write code into core react
 * 
 * 
 * 
 * 
 */

>>>>>>> 3f071f4213ddeab49aebe7b6722efd265074b1ad


const parent = React.createElement("div",
    {id:"parent"},
   [
    React.createElement("div",
        {id:"child"},
       [
<<<<<<< HEAD
        React.createElement("h1",{},"This is Namste React "),
=======
        React.createElement("h1",{},"I am h1 Tag"),
>>>>>>> 3f071f4213ddeab49aebe7b6722efd265074b1ad
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