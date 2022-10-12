const uuid = require('uuid');
const Products = require('../models/product.model');


//? /products

const getAllProduct = async () => {
    const data = await Products.findAll();
    return data;
}

const postProduct = async (data) => {
    const product = {
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        quanty: data.quanty,
        isAvailable: data.isAvailable
    };

    await Products.create(product);

    return product;
}

//? /product/:id
const getProductById = async (id) => {
    const data = await Products.findOne({
        where: {
            id
        }
    })
    return data;
}

const pacthProduct = async (id, data) => {
    const product = await Products.update(data, {
        where: {
            id
        }
    });
    return product;
}

const deleteProduct = async (id) => {
    const product = await Products.destroy({
        where: {
            id
        }
    })
    return product;
}

module.exports = {
    getAllProduct,
    postProduct,
    getProductById,
    pacthProduct,
    deleteProduct
}