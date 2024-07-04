import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom"
import Routes from "./Routes.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../client/redux/store.js";
/// Since we will have to attach some configration to our routes
// We can use the traidtional way of doing things and hence going 
// with this approach instead 
import { renderRoutes } from "react-router-config";



ReactDOM.hydrate(
<Provider store={store}>
    <BrowserRouter>
        {renderRoutes(Routes)}
    </BrowserRouter>
</Provider>
,document.getElementById("root"));