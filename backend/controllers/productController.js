const Product = require('../models/productModel');

//Add product
const addProduct = async (req, res) => {
    try{
        let products = await Product.find({});
        let id = products.length > 0 ? products[products.length -1].id +1 : 1;
    
        const product = new Product({
            id: id,
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            images: req.files.map(file => file.path),
        });
        await product.save();
        res.json({
            success: true,
            name: req.body.name,
        })
    }catch(error){
        console.error("Erro ao adicionar o produto: ", error);
        res.status(500).json({message: "Erro ao adicionar o produto"});
    }
    
}

//Remove product
const removeProduct = async (req, res) => {
    try{
        await Product.findOneAndDelete({id: req.body.id});
        res.json({
            success: true,
            message: 'Product removed'
        })
    }catch(error){
        console.error("Erro ao remover o produto: ", error);
        res.status(500).json({message: "Erro ao remover o produto"});
    }
    
}

//Get all products
const getAllProducts = async (req, res) => {
    try{
        const Products = await Product.find({});
        res.json(Products);
    }catch(error){
        console.error("Erro ao buscar os produtos: ", error);
        res.status(500).json({message: "Erro ao buscar os produtos"});
    }
    
};

//Get all women products
const getWomenProducts = async (req, res) => {
    try{
        const womenProducts = await Product.find({category: "women"});
        res.json(womenProducts);
    }catch(error){
        console.error("Erro ao buscar os produtos de mulher: ", error);
        res.status(500).json({message: "Erro ao buscar os produtos de mulher"});
    }
    
}

//Get all men products
const getMenProducts = async (req, res) => {
    try{
        const menProducts = await Product.find({category: "men"});
        res.json(menProducts);
    }catch(error){
        console.error("Erro ao buscar os produtos de homem: ", error);
        res.status(500).json({message: "Erro ao buscar os produtos de homem"});
    }
    
}

//Get all kids products
const getKidsProducts = async (req, res) => {
    try{
        const kidsProducts = await Product.find({category: "kids"});
        res.json(kidsProducts);
    }catch (error){
        console.error("Erro ao buscar os produtos de criança: ", error);
        res.status(500).json({message: "Erro ao buscar os produtos de criança"});
    }
    
}

//Get products by price range
const getProductsByPriceRange = async (req, res) => {
    try{
        const products = await Product.find({price: {$gte: req.body.min, $lte: req.body.max}});
        res.json(products);
    }catch (error) {
        console.error("Erro aos buscar os prosutos por marhem de preço: ", error);
        res.status(500).json({message: "Erro ao buscar os produtos por margem de preço"});
    }
    
}

//Get products sorted by price
const getProductsSortedByPrice = async (req, res) => {
    try{
        //vemos se é desc. Se nao for metemos como asc
        const sortorder = req.body.sort === 'desc' ? -1 : 1;

        const products = await Product.find({}).sort({price: sortorder});
        res.json(products);
    }catch (error){
        console.error("Erro ao buscar os produtos por preço: ", error);
        res.status(500).json({message: "Erro ao buscar os produtos por preço"});
    }
}

module.exports = { addProduct, removeProduct, getAllProducts, getWomenProducts, getMenProducts, getKidsProducts, getProductsByPriceRange, getProductsSortedByPrice };
