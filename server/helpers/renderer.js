import React from "react";
import fs from "fs";
import path from "path";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import Routes from "../../client/Routes";

export default (req, store) => {
    const indexFile = path.resolve('./index.html');
.3
    try {
        const data = fs.readFileSync(indexFile, 'utf8');
        
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.path} context={{}}>
                    <div>{renderRoutes(Routes)}</div>
                </StaticRouter>
            </Provider>
        );

        const app = data.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
        return app;
    } catch (err) {
        console.error('Error reading index.html file:', err);
        return 'An error occurred';
    }
};
