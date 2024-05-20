const express = require("express");
const app = express();
const tasks = require("./routes/task");
const notFound = require("./middleware/notFound");
const connectDB = require("./db/connect");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
