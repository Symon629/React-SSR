import React from "react";
import Home from "./components/Home.jsx";
import UsersList from "./components/UsersList.js";


// export default ()=>{
//     return <div>
//         <Route exact path="/" component={Home}/>
//         <Route  path="/users" component={UsersList}/>
//     </div>
// }



// this has to be the way now since we are using react-router config
export default[
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/users',
        component:UsersList,
    },
]
