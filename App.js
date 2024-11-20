import React from "react";
import ReactDOM from 'react-dom/client'


const TitleComponent = ()=> (
    <h1 className="heading" >
    Namste React Using jsx 
    </h1>
);


const HeadingComponent = ()=>(
    <>
    <TitleComponent />
    <h1 className="heading" >
    Namste React Using Functional Component
    </h1>
    </> 
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent />)



