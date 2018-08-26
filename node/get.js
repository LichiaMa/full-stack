const http = require("http");
const url = require("url");

const serve = http.createServer((req, res) => {
  const {pathname, query} = url.parse(req.url, true);
  res.write(JSON.stringify(query))
  res.end();
});

serve.listen(3000);
