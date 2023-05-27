require("dotenv").config();
const path = require("path");
const express = require("express");
const dbConnect = require("./src/utils/db.connect");
const session = require("express-session");
const morgan = require("morgan");
const passport = require("passport");

(async () => {
  // console.clear();
  const app = express();

  const PORT = process.env.PORT || 8080;
  await dbConnect(process.env.MONGO_URL);
  /*--------------------------------Middlewares--------------------------*/
  app.use(
    session({
      secret: "Unholy Shit",
      saveUninitialized: false,
      resave: false,
    })
  );
  app.use(passport.session());
  app.use(morgan("tiny"));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, "assets")));

  app.get("/", (req, res) => {
    res.status(200).send("<h2>Hello, World!!!</h2>");
  });

  app.listen(
    PORT,
    console.log(`Server has started, and is running in ${process.env.NODE_ENV} 
    on http://localhost:${PORT}`)
  );
})();
