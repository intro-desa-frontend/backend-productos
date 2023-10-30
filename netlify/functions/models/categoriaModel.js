let categorias = [
    { id: 1, nombre: 'Calzado' },
    { id: 2, nombre: 'Ropa' },
    { id: 3, nombre: 'Accesorios' },
];

const find = () => {
    return categorias;
};

const findById = (id) => {
    return categorias.find(categoria => categoria.id === id);
};

const create = (name) => {
    const newCategoria = { id: categorias.length + 1, nombre: name };
    categorias.push(newCategoria);
    return newCategoria;
};

const update = (id, name) => {
    const categoriaIndex = categorias.findIndex(categoria => categoria.id === id);
    if (categoriaIndex !== -1) {
        categorias[categoriaIndex].nombre = name;
        return categorias[categoriaIndex];
    }
    return null;
};

const deleteCategoria = (id) => {
    const categoriaIndex = categorias.findIndex(categoria => categoria.id === id);
    if (categoriaIndex !== -1) {
        categorias.splice(categoriaIndex, 1);
        return true;
    }
    return false;
};

module.exports = {
    find,
    findById,
    create,
    update,
    delete: deleteCategoria
};
