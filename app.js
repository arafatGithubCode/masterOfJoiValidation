const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", userRouter);

//base route
app.get("/", (req, res) => {
  res.status(200).send("welcome to joy validation");
});

//route not found
app.use((req, res, next) => {
  res.status(400).send("Requested route is not found");
});

//server error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something broke!");
});

module.exports = app;
