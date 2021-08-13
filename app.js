const express = require("express");
const app = express();
const { products } = require("./data");

app.get(`/`, (req, res) => {
  res.send(`<h1>Home page</h1><a href="/api/products">products</a>`);
});

app.get("/api/products/:productId", (req, res) => {
  const singleProduct = products.find(
    (product) => product.id === Number(req.params.productId)
  );
  if (!singleProduct) {
    return res.status(404).send(`<h1>Product does not exist</h1>`);
  }
  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  //console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log(`server is listening on port 50000....`);
});
