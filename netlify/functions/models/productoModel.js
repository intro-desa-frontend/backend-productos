const categoria = require("./categoriaModel");

const producto = (() => {
  let productos = [
    {
      id: 1,
      nombre: "Zapatillas Nike",
      precio: 75.0,
      categoriaId: 1,
      stock: 120,
    },
    {
      id: 2,
      nombre: "Camiseta Adidas",
      precio: 25.0,
      categoriaId: 2,
      stock: 200,
    },
    { id: 3, nombre: "Reloj Casio", precio: 50.0, categoriaId: 3, stock: 50 },
  ];

  const find = () => {
    return productos.map((producto) => {
      const categoriaInfo = categoria.findById(producto.categoriaId);
      let productoResponse = {
        ...producto,
        categoria: categoriaInfo ? categoriaInfo.nombre : null,
      };
      
      return productoResponse;
    });
  };

  const findById = (id) => {
    const producto = productos.find((producto) => Number(producto.id) === Number(id));
    if (producto) {
      const categoriaInfo = categoria.findById(producto.categoriaId);

      let productoResponse = {
        ...producto,
        categoria: categoriaInfo ? categoriaInfo.nombre : null,
      };

      return productoResponse;
    }
    return null;
  };

  const create = (newProducto) => {
    newProducto.id = productos.length + 1;
    productos.push(newProducto);
    return newProducto;
  };

  const update = (id, updatedProducto) => {
    const productoIndex = productos.findIndex((producto) => Number(producto.id) === Number(id));
    if (productoIndex !== -1) {
      productos[productoIndex] = {
        ...productos[productoIndex],
        ...updatedProducto,
      };
      return productos[productoIndex];
    }
    return null;
  };

  const deleteProducto = (id) => {
    const productoIndex = productos.findIndex((producto) => Number(producto.id) === Number(id));
    if (productoIndex !== -1) {
      productos.splice(productoIndex, 1);
      return true;
    }
    return false;
  };
  return {
    find,
    findById,
    create,
    update,
    delete: deleteProducto,
  };
})();

// Exportar la función producto
module.exports = producto;
