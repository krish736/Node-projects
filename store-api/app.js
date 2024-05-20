require("dotenv").config();
// async

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const productsRouter = require('./routes/products')

app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>Stor API</h1> <a href="/api/v1/products">Products</a>');
});

app.use('/api/v1/products' , productsRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Listening on Port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
