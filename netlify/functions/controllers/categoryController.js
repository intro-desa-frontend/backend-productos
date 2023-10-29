const CategoriaModel = require('../models/CategoriaModel');

exports.getCategories = async (req, res) => {
    try {
        const categories = await CategoriaModel.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCategoria = async (req, res) => {
    const newCategoria = new CategoriaModel(req.body);
    try {
        await newCategoria.save();
        res.status(201).json(newCategoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateCategoria = async (req, res) => {
    try {
        const updatedCategoria = await CategoriaModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCategoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteCategoria = async (req, res) => {
    try {
        await CategoriaModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'CategoriaModel deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
