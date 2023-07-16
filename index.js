const http = require("http");
const fs = require("fs");

//SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  console.log(pathName);

  if (pathName === "/" || pathName === "/overview") {
    res.end("hello from the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("hello from PRODUCT");
  } else if (pathName === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log(`Server listening on port 3000....`);
});
