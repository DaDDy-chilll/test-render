require("dotenv").config({ path: __dirname + ".env" });
const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
