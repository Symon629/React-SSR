import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../../client/Routes";

export default (req)=>{
    console.log(req.path)
    const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
        <Routes/>
    </StaticRouter>)
 const html = `<html>
    <head>
        <title>React Server Side Rendered App</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="bundle.js">${content}</script>
    </body>
</html>`
return html;
}