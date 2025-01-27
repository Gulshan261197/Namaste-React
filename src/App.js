import React from "react";
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";

const AppLayout = ()=>{
    return(
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route path="blogs" element={<About />} />
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)



