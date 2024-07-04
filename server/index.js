import express from "express";
// MOved some code to the renderer file
import renderer from "./helpers/renderer";
const app = express();

app.use(express.static('public'));

app.get("*",(req,res)=>{
    //In order to handle jsx on the server side 
    res.send(renderer(req))
   
})

app.listen(3000,()=>{
    console.log("App Started on port 3000");
})