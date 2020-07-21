const express = require("express");
const cors = require("cors");
//Express allow to run a server and we assign it to an app variable
const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
// allows to connect two servers and they can exchange data
app.use(cors());
// make sure the server accept json files
app.use(express.json());

// routes
// are created two routes for server and react will be use
// app.get("/api/users", (req, res) => res.send("Users Routes"));
app.use("/api/users", require("./routes/users"));
app.use("/api/notes", require("./routes/notes"));

module.exports = app;
