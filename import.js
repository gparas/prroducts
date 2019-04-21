const { SiteClient } = require('datocms-client');
const client = new SiteClient('c8a1f1e4c68f3226379c941cd6a6e0');
const data = require('./src/data/products');

data.products.reduce(
  (chain, product) =>
    chain
      .then(() => client.uploadImage(product.image))
      .then(image =>
        client.items.create({
          title: product.title,
          rating: product.rating,
          image: image,
          price: product.price,
          itemType: '73694',
        })
      ),
  Promise.resolve()
);
