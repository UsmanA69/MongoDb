const express = require("express");
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const users = require("./routes/users");
const auth = require("./routes/auth");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://localhost/vidly")
  .then(() => {
    console.log("====================================");
    console.log("connected to mongo db");
    console.log("====================================");
  })
  .catch((err) => {
    console.log("====================================");
    console.log(`Could not connect to mongodb reason ${err}`);
    console.log("====================================");
  });

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("====================================");
  console.log(`listening to port ${port}`);
  console.log("====================================");
});
