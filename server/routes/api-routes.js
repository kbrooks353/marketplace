const router = require("express").Router();
const db = require("../models");

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/api/products", function (req, res) {
  db.Product.create({
    product_name: req.body.name,
    image: req.body.image,
    price: req.body.price
  })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.delete("/api/products/:id", function(req,res){
  db.Produc.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProducts => res.json(dbProducts))
    .catch(err => res.status(422).json(err));
})

router.get("/api/products", function (req, res) {
  db.Product.findAll()
    .then(function (dbProducts) {
      res.json(dbProducts);
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
});


module.exports = router;
