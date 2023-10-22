const producto = (() => {
  let productos = [
    { id: 1, nombre: 'Zapatillas Nike', precio: 75.00, categoria: 'Calzado', stock: 120 },
    { id: 2, nombre: 'Camiseta Adidas', precio: 25.00, categoria: 'Ropa', stock: 200 },
    { id: 3, nombre: 'Reloj Casio', precio: 50.00, categoria: 'Accesorios', stock: 50 },
    // ... otros productos
  ];

  const find = () => {
    return productos;
  };

  const findById = (id) => {
    return productos.find(producto => producto.id === id);
  };

  const findByIdAndUpdate = (id, update) => {
    const producto = productos.find(producto => producto.id === id);
    if (producto) {
      Object.assign(producto, update);
      return producto;
    }
    return null;
  };

  const findByIdAndDelete = (id) => {
    const index = productos.findIndex(producto => producto.id === id);
    if (index !== -1) {
      return productos.splice(index, 1)[0];
    }
    return null;
  };

  return {
    find,
    findById,
    findByIdAndUpdate,
    findByIdAndDelete
  };
})();

// Exportar la función producto
module.exports = producto;
