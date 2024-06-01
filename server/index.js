const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes").auth;
const larpEventRoute = require("./routes").larpevent;
const passport = require("passport");
require("./config/passport")(passport);
const cors = require("cors");

mongoose
  .connect(process.env.MONGODB_CONNECTION)
  //process.env.MONGODB_CONNECTION 遠端
  //"mongodb://127.0.0.1:27017/mernDB" 本地
  .then(() => {
    console.log("connecting to db...");
  })
  .catch((e) => console.log(e));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/user", authRoute);

//只有登入系統才可開團或參加
//被jwt保護
app.use(
  "/api/larpevent",
  passport.authenticate("jwt", { session: false }),
  larpEventRoute
);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("server is running right now 0528");
});
