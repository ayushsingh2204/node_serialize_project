const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const db=require("./models");
var corsOptions = {
    origin: "http://localhost:3000"
  };
  app.use(cors(corsOptions));
  app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application." });
  });

  require("./routes/reporter.routes")(app);
  require("./routes/user.routes")(app);
  require("./routes/news.routes")(app);
  require("./routes/issue.routes")(app);

// db.sequelize.sync({ force: true }).then((req)=>{
    
// });
app.listen(8080,()=>{
  console.log("server running");
});



