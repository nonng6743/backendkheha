const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./auth/passport");

require("./models/user");
require("./models/seller");
require("./models/products");

const middlewares = require("./middlewares");
const api = require("./api");
const User = require("./models/user");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/users', async (req, res) => {
  try{
    const users = await User.findAll();
    return res.json(users)
  }catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong'});
  }
})

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
