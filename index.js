require("dotenv").config();
require("express-async-errors");

//http
const { createServer } = require("http");
/////
const path = require("path");
const express = require("express");
const dbConnect = require("./src/utils/db.connect");
const session = require("express-session");
const morgan = require("morgan");
const four_oh_four = require("./src/middlewares/404");
const errorHandlerMiddleware = require("./src/middlewares/error-handler");
const cookieParser = require("cookie-parser");
const logger = require("./src/utils/logger");
const cors = require("cors");

//starting point
(async () => {
  // console.clear();
  const app = express();

  const PORT = process.env.PORT || 6986;
  dbConnect(process.env.MONGO_URL);
  /*--------------------------------Middlewares--------------------------*/

  //morgan
  app.use(morgan("dev"));
  app.use(cors());

  //express as a middleware
  app.use(express.json());
  app.use(express.static(path.join(__dirname, "assets")));
  app.use(cookieParser());

  // //
  /* -------------------routes------------------------ */
  app.get("/", (req, res) => {
    // logger.info(req);
    res.status(200).send("<h2>Hello, World!!!</h2>");
  });

  app.use("/api/v1", require("./src/routes/index"));
  app.use(four_oh_four);
  app.use(errorHandlerMiddleware);

  const server = createServer(app);
  // server up
  server.listen(
    PORT,
    logger.info(
      `Server has started, and is running in ${process.env.NODE_ENV} on http://localhost:${PORT}`
    )
  );
})();
