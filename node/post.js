const http = require("http");
const url = require("url");
const query = require("querystring");

const serve = http.createServer((req, res) => {
  let data = "";
  req.on("data", chunk => {
    data += chunk;
  });

  req.on("end", () => {
    data = query.parse(data);
    res.write(JSON.stringify(data));
    res.end();
  });
});

serve.listen(3000);
