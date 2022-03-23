const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    router = require("./router"),
    fs = require("fs"),
    plainTextContentType = {
        "Content-Type": "text/plain"
    },
    htmlContentType = {
        "Content-Type": "text/html"
    },
    customReadFile = (file, res) => {
        fs.read(`./${file}`, (errors, data) => {
            if (errors) {
                console.log("Error reading the file...");
            }
            res.end(data);
        });
    };

    router.get("/", (req, res) => {
        res.writeHead(httpStatusCodes.OK, plainTextContentType);
        res.end("INDEX");
    });

    router.get("/index.html", (req, res) => {
        res.writeHead(httpStatusCodes.OK, htmlContentType);
        customReadFile("views/index.html", res);
    });

    router.post("/", (req, res) => {
        res.writeHead(httpStatusCodes.OK, plainTextContentType);
        res.end("POSTED");
    });

    http.createServer(router.handle).listen();
    console.log(`The server is listening on port number: ${port}`);