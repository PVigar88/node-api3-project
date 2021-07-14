// require your server and launch it
const server = require("./api/server.js");

server.listen(4000, () => {
  console.log("server listening on http://localhost:4000");
});
