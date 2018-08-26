const fs = require("fs");
const http = require("http");
const path = require("path");

const serve = http.createServer((req, res) => {
  fs.readFile(`www${req.url}`, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Not Found");
    } else {
      res.write(data);
    }

    res.end();
  });
});

serve.listen(3000);
