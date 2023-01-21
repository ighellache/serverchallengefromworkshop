//challenge 1: create a new route for the homepage at GET /
//should return HTML body including Hello express

const server = require("./server.js");

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
// server.listen(3000, () => console.log("Listening at http://localhost:3000"));
