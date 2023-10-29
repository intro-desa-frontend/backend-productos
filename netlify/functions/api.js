const express = require("express");
const productosRouter = require("./routes/productos");
const errorHandler = require("./middlewares/errorHandler");
const serverless = require ("serverless-http") ;
const cors = require ( "cors");

require("dotenv").config();

const app = express();
app.use(express.json())

// implementar cors
app.use(cors());

// Ruta base
app.get("/", (req, res) => {
  res.send("API de productos");
});


// Ruta base
app.get("/health", (req, res) => {
  res.send("OK");
});


// Rutas de productos
app.use("/api/productos", productosRouter);
app.use('/api/categories', categoryRoutes);

app.use(errorHandler);

export const handler = serverless(app);
