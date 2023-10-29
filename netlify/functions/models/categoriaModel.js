let categorias = [
    { id: 1, nombre: 'Calzado' },
    { id: 2, nombre: 'Ropa' },
    { id: 3, nombre: 'Accesorios' },
];

class CategoriaModel {
    // Obtener todas las categorías
    static findAll() {
        return categorias;
    }

    // Encontrar una categoría por ID
    static findById(id) {
        return categorias.find(Categoria => Categoria.id === id);
    }

    // Crear una nueva categoría
    static create(name) {
        const newCategoria = { id: categorias.length + 1, name };
        categorias.push(newCategoria);
        return newCategoria;
    }

    // Actualizar una categoría existente
    static update(id, name) {
        const CategoriaIndex = categorias.findIndex(Categoria => Categoria.id === id);
        if (CategoriaIndex !== -1) {
            categorias[CategoriaIndex].name = name;
            return categorias[CategoriaIndex];
        }
        return null;
    }

    // Eliminar una categoría existente
    static delete(id) {
        const CategoriaIndex = categorias.findIndex(Categoria => Categoria.id === id);
        if (CategoriaIndex !== -1) {
            categorias.splice(CategoriaIndex, 1);
            return true;
        }
        return false;
    }
}

module.exports = CategoriaModel;
