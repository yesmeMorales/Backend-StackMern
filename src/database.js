// Used mongoose to conect database
const mongoose = require("mongoose");
//we create a dtabase
//process have access all the system
//then we access to MONGODB_URI variable
console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost/test";

//connect allow to connect to mongodb instance
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
// we conect to tatabase and printed a message
connection.once("open", () => {
  console.log("DB is conected");
});
