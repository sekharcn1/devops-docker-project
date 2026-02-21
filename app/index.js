const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("hello"));
app.get("/health", (req, res) => res.send("ok"));

app.listen(8080, () => console.log("running on 8080"));