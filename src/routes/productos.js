const express = require("express");
const route = express.Router();


const ProductoController = require("../controllers/productoController");

const { requiredScopes } = require("express-oauth2-jwt-bearer");


route.get("/", ProductoController.getAllProductos);

// Obtener un producto por ID
route.get("/:id", ProductoController.getProductoById);

// Crear un nuevo producto
route.post("/",  ProductoController.createProducto);

// Actualizar un producto existente
route.put("/:id", ProductoController.updateProductoById);

// Eliminar un producto
route.delete("/:id",  ProductoController.deleteProductoById);

module.exports = route;
