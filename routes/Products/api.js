const express = require("express");
const router = express.Router();
const products = require("../../db/products.json");
var base = "/products";
router.get(base, (req, res) => {
  res.send(
    "Welcome to products API page , you can use /all to display all products"
  );
});
router.get(base + "/all", (req, res, next) => {
  res.type("json").send(JSON.stringify(products, null, 1));
});

router.get(base + "/:id", (req, res, next) => {
  const id = req.params.id;
  res.type("json").send(JSON.stringify(products[id], null, 1));
});
router.get(base + "/:id/:qt", (req, res, next) => {
  const id = req.params.id;
  const qt = req.params.qt;
  res.type("json").send(
    JSON.stringify(
      {
        id: id,
        qt: qt,
        unit_price: products[id].price,
        total_price: products[id].price * qt,
      },
      null,
      1
    )
  );
});

router.get(base + "/check/instock/:qt", (req, res, next) => {
  const qt = req.params.qt;
  const inStock = Object.keys(products)
    .filter((key) => {
      return products[key].stock >= qt;
    })
    .reduce((obj, key) => {
      obj[key] = products[key];
      return obj;
    }, {});
  res.type("json").send(JSON.stringify(inStock, null, 1));
});

module.exports = router;
