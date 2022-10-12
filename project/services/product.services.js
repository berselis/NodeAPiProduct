const productController = require('../controllers/product.controller');

const getProductAll = (_, res) => {
    productController.getAllProduct()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({ 'error': error.message }))
}

const getProductById = (req, res) => {
    const id = req.params.id;
    productController.getProductById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            }else{
                res.status(404).json({message:'Invalid id'})
            }
            
        })
        .catch(error => res.status(400).json({ message: error.message }))

}

const postProduct = (req, res) => {
    const { name, category, price = 0, quanty = 0 } = req.body;
    if (name && category) {
        const data = {
            name,
            category,
            price,
            quanty,
            isAvailable: quanty > 0
        }

        productController.postProduct(data)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(400).json({ message: error.message }))

    } else {
        res.status(400).json({ message: 'Bad request, name and category cant be null' });
    }
}

const pacthProduct = (req, res) => {
    const id = req.params.id;
    const { name, category, price = 0, quanty = 0 } = req.body;
    if (name && category) {
        const data = {
            name,
            category,
            price,
            quanty,
            isAvailable: quanty > 0
        }
        productController.pacthProduct(id, data)
            .then(response => {
                if (response[0]) {
                    res.status(200).json({ message: `product with id ${id} was edited successfully` })
                } else[
                    res.status(404).json({ message: 'invalid id' })
                ]
            }).catch(error => res.status(400).json({ message: error.message }))


    } else {
        res.status(400).json({ message: 'Bad request, name and category cannot be null' });
    }
}

const deleteProduct = (req, res) => {
    const id = req.params.id;
    productController.deleteProduct(id)
        .then(response => {
            if (response) {
                res.status(204).json()
            } else {
                res.status(404).json({ message: 'Indalid id' })
            }
        }).catch(error => res.status(400).json({ message: error.message }))
}

module.exports = {
    getProductAll,
    getProductById,
    postProduct,
    pacthProduct,
    deleteProduct
}





// {
// 	'id': 'uuid',
// 	'name': 'string',
// 	'category': 'string',
// 	'price': integer,
//  'quanty': integer,
// 	'isAvailable': bool
// }