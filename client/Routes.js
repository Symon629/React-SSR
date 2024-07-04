import React from "react";
import {Route} from "react-router-dom";
import Home from "./components/Home.jsx";


export default ()=>{
    return <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/hi" component={()=><div><h1>HI</h1> </div> }/>
    </div>
}

