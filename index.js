const http = require("http");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  console.log(pathName);

  if (pathName === "/" || pathName === "/overview") {
    res.end("hello from the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("hello from PRODUCT");
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
