import express from "express";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";
import router from "./src/routes/index.js";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import connect from "./src/utils/db.connect.js";
import hbs_setup from "./src/utils/hbs.setup.js";
import passport from "./src/utils/passport.js";
import session from "express-session";
import morgan from "morgan";
import cors from "cors";
import four_oh_four from "./src/middlewares/404.js";
import errorHandlerMiddleware from "./src/middlewares/error-handler.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//? Intializations
const app = express();

//?live reload
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

//? Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(connectLiveReload());
app.use(
  express.urlencoded({
    extended: true,
    limit: "1mb",
    parameterLimit: 5000,
  })
);
app.use(express.static(path.join(__dirname, "/assets")));
// ? passport
app.use(
  session({
    secret: "this_is_a_secret",
    // store: pgSessionStorage,
    resave: true,
    saveUninitialized: true,
    rolling: true, // forces resetting of max age
    cookie: {
      maxAge: 360000,
      secure: false, // this should be true only when you don't want to show it for security reason
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
//? HBS setup
hbs_setup(app, __dirname);

//? routes
app.get("/", (req, res) => {
  // throw Error
  res.render("home", {
    title: "Home Page",
    department: {
      name: "Computer Science",
    },
  });
});

app.use(router);

//custom middleware
app.use(four_oh_four);
app.use(errorHandlerMiddleware);

//server setup
const port = process.env.PORT || 3000;

async function serve() {
  await connect(process.env.MONGO_URI);

  //?server - up
  app.listen(port, () =>
    console.log(`app started on port http://localhost:${port}/ ...`)
  );
}
serve();
