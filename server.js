const express = require("express");

const server = express();

module.exports = server;

server.get("/", (req, res) => {
    res.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Home</title>
        </head>
        <body>
          <h1>Hello Express</h1>
        </body>
      </html>
    `);
  }); //challenge 1 complete

//create a new route GET /colour


server.get("/colour", (req, res) => {
  const hex = req.query.hex || "ffffff"; // defaults to white
  //req.query object checks for the presence of the 'hex' property in the URL's search parameters
  const html = `
    <style>
      body {
        background-color: #${hex};
      }
    </style>
    <form>
      <label for="hex">Enter hex</label>
      <input name="hex" value="${hex}">
    </form>
  `;
  res.send(html);
}); //challenge 2 and 3 complete

const cheeses = [];
server.get("/cheese", (req, res) => {
  // const cheese = req.query.cheese || "cheddar" ;
  const list = cheeses.map((cheese) => `<li>${cheese}</li`);
  res.send(`<form method="POST" >
      <label for="cheese">Cheese name</label>
      <input name="cheesename">
      <br>
      <label for="rating">Cheese rating</label>
        <input name="rating" type="range" min="0" max="5" step="0.5">
    </form>
    <button>Enter!</button>
    <ul>${list.join("")}<br></ul>
    `)
});

server.post("/cheese", express.urlencoded({ extended: false }), (req, res) => {
  const name = req.body.cheesename;
  const rating = req.body.rating;
  cheeses.push({ name, rating });
  res.redirect("/cheese");
});

//you tried, just follow the solution