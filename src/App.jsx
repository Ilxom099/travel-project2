import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/index.jsx";
import About from "./pages/about/index.jsx";
import Package from "./pages/package/index.jsx";
import SinglePackage from "./pages/singlePackage/index.jsx";
import Contact from "./pages/contact/index.jsx";
import Navbar from "./components/navbar/index.jsx";
import Footer from "./components/footer/index.jsx";

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/package" element={<Package/>} />
                <Route path="/singlePackage" element={<SinglePackage/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;