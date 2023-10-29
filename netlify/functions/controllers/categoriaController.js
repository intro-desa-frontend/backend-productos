const CategoriaModel = require('../models/categoriaModel');

exports.getCategorias = async (req, res) => {
    try {
        const categorias = await CategoriaModel.find();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCategoria = async (req, res) => {
    try {
        const newCategoria = await CategoriaModel.create(req.body.nombre);
        res.status(201).json(newCategoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateCategoria = async (req, res) => {
    try {
        const updatedCategoria = await CategoriaModel.update(req.params.id, req.body.nombre);
        if (!updatedCategoria) {
            return res.status(404).json({ message: 'CategoriaModel not found' });
        }
        res.status(200).json(updatedCategoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCategoria = async (req, res) => {
    try {
        await CategoriaModel.delete(req.params.id);
        res.status(200).json({ message: 'CategoriaModel deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
