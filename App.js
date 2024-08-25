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



const parent = React.createElement("div",
    {id:"parent"},
   [
    React.createElement("div",
        {id:"child"},
       [
        React.createElement("h1",{},"I am h1 Tag"),
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