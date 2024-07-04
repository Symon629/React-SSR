import React from "react"
const handleClick = ()=>{
    console.log("Button Clicked!");
}
const Home = ()=>{
    return <div><h1>Home Page update</h1>
    <button onClick={handleClick}>Click Me!</button></div>
}
export default Home;