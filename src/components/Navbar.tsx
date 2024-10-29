import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
export default function Navbar(){
    return(
        <div className="flex p-4 items-center bg-slate-500">
                <div className="font-mono text-xl text-white flex flex-row">
                    <ul className="flex flex-row space-x-4">
                    <li>Home</li>
                    <li>Packages</li>
                    <li>Destinations</li>
                    <li>Contact us</li>
               </ul>
                    
            </div>
        </div>
    );
}