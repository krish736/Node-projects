const express = require("express");
const app = express();
const tasks = require("./routes/task");

const port = 3000;

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("task manager");
});

app.use("/api/v1/tasks", tasks);

app.listen(port, console.log(`Listening on port: ${port}...`));
