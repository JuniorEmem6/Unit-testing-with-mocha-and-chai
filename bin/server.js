const app = require("../app");
const http = require("http")

const server = http.createServer(app);
server.listen("4000", () => {
    console.log("Server on port 4000");
})