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
      return {
        ...producto,
        categoria: categoriaInfo ? categoriaInfo.nombre : null,
      };
    });
  };

  const findById = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    if (producto) {
      const categoriaInfo = categoria.findById(producto.categoriaId);
      return {
        ...producto,
        categoria: categoriaInfo ? categoriaInfo.nombre : null,
      };
    }
    return null;
  };

  const findByIdAndUpdate = (id, update) => {
    const producto = productos.find((producto) => producto.id === id);
    if (producto) {
      Object.assign(producto, update);
      return producto;
    }
    return null;
  };

  const findByIdAndDelete = (id) => {
    const index = productos.findIndex((producto) => producto.id === id);
    if (index !== -1) {
      return productos.splice(index, 1)[0];
    }
    return null;
  };

  return {
    find,
    findById,
    findByIdAndUpdate,
    findByIdAndDelete,
  };
})();

// Exportar la función producto
module.exports = producto;
