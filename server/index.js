import "babel-polyfill";
import express from "express";
// MOved some code to the renderer file
import renderer from "./helpers/renderer";
import createStore from "./helpers/redux/store";
import { matchRoutes } from "react-router-config";
import Routes from "../client/Routes";

const app = express();

app.use(express.static('public'));

app.get("*",(req,res)=>{
    //In order to handle jsx on the server side 

    const store = createStore();

    // Will return an array of comoponent that will are about to be renderd
    // takes in the ROutes and the routes the user is trying to visit

    matchRoutes(Routes,req.path)

    
    res.send(renderer(req,store))
   
})

app.listen(3000,()=>{
    console.log("App Started on port 3000");
})