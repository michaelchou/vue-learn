const HTTP_PORT = 3000

const http = require("http")
const url = require("url")
const fs = require("fs")
const mine = require("./mine").types
const path = require("path")

const server = http.createServer((request, response) => {
    let pathName = url.parse(request.url).pathname
    let realPath = path.join("src", pathName)
    let ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : "unknown"
    fs.exists(realPath, exists => {
        if (!exists) {
            response.writeHead(404, {
                "Content-Type": "text/plain"
            })
            response.write("This request URL "+ pathName + " was not found no this server")
            response.end()
        } else {
            fs.readFile(realPath, "binary", (error, fileContent)=> {
                if (error) {
                    response.writeHead(505, {
                        "Context-Type":"text/plain"
                    })
                    response.end(error)
                } else {
                    let contentType = mine[ext] || "text/plain"
                    response.writeHead(200, {
                        "Context-Type": contentType
                    })
                    response.write(fileContent, "binary")
                    response.end()
                }
            })
        }
    })
})

server.listen(HTTP_PORT)
console.log("Server runing at port: " + HTTP_PORT + ".");