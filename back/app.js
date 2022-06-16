/** Require */
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const path = require("path");

/** Environmental Variable */
const PORT = process.env.PORT ?? 3000;
const MONGO_URI =
  process.env.MONGO_URI ?? "mongodb://localhost:27017/JipgyeRIA";

/** Import Router */
const orderRouter = require("./routers/order.router");
const adminRouter = require("./routers/admin.router");

/** Set View Engine */
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/** Static Files Setting */
app.use(express.static(path.join(__dirname, "public")));

/** DB Connect */
mongoose.connect(MONGO_URI, () => {
  console.log("database connected");
});

/** Handler: Router Setting */
app.use("/order", orderRouter);
app.use("/admin", adminRouter);

/** Server */
app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
