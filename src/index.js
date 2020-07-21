//we use dotenv module to import enviroment variables that we saved in .env file
require("dotenv").config();

const app = require("./app");
require("./database");

//run server in port 4000
async function main() {
  //app method is asyncronous
  await app.listen(app.get("port"));
  console.log("server on port ", app.get("port"));
}

main();
