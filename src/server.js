import express from "express"
import path from "path"

import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { Helmet } from "react-helmet"
import App from "./app"

const app = express()

app.use(express.static(path.resolve(__dirname, "../dist")))

app.get("/*", (req, res) => {
    const context = {}
    const jsx = (
        <StaticRouter context={context} location={req.url}>
            <App />
        </StaticRouter>
    )
    const reactDom = renderToString(jsx)
    const helmetData = Helmet.renderStatic()

    res.writeHead(200, { "Content-Type": "text/html" })
    res.end(htmlTemplate(reactDom, helmetData))
})

app.listen(8000)

function htmlTemplate(reactDom, helmetData) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
            <title>bysimeon</title>
        </head>
        
        <body>
            <div id="app">${reactDom}</div>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `
}
