import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css"
import HelloWorld from "./state-drills/HelloWorld";
import Bomb from "./state-drills/Bomb";
import RouletteGun from "./state-drills/RoulletteGun";


ReactDom.render(
    <div>
        <App  /> 
        <HelloWorld/> 
        <Bomb />
        <RouletteGun bulletInChamber={7}/>
        
    </div>, document.getElementById("root")
        
);

