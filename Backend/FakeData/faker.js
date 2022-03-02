var faker = require('faker');

faker.seed(123);

const arr = [...Array(5)].map((item) => ({
  name: faker.commerce.productName(),
  productModel: faker.datatype.uuid(),
  productUrl:faker.internet.url(),
  inStock:faker.datatype.boolean(),
  fastDelivery:faker.datatype.boolean(),
  productdescription :faker.commerce.productDescription(),
  image: faker.random.image(),
  price: faker.commerce.price(),
}));



module.exports = { arr }