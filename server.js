const express = require('express');
const db = require('./project/utils/database');
const initModels = require('./project/models/initModels');
const productRouter = require('./project/routers/product.router');
const { port } = require('./config');
const server = express();


server.use(express.json());

db.authenticate()
    .then(() => console.log(''))
    .catch(error => console.log(error));

db.sync()
    .then(() => console.log(''))
    .catch(error => console.log(error));


initModels();

server.get('/', (_, res) => {
    res.status(200).json({ message: 'Server OK!' })
})
server.use('/', productRouter);

server.listen(port, () => {
    console.log(`Server started at port ${port}`);
});