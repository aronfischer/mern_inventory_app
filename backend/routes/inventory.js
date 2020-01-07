const router = require("express").Router();
const Inventory = require("../model/inventory.model");

// Search for all items
router.route("/").get((req, res) => {
  Inventory.find()
    .then(item => res.json(item))
    .catch(err => res.status(400).json("Error :" + err));
});

// Add a new item
router.route("/create").post((req, res) => {
  const item = req.body.item;
  const amount = req.body.amount;
  const category = req.body.category;

  const newInventory = new Inventory({
    item,
    amount,
    category
  });

  newInventory
    .save()
    .then(() => res.json("Item added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// Update an item
router.route("/update/:id").post((req, res) => {
  Inventory.findById(req.params.id)
    .then(item => {
      item.item = req.body.item;
      item.amount = req.body.amount;
      item.category = req.body.category;

      item
        .save()
        .then(res.json("Item updated"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// Search for a specific item by it
router.route("/:id").get((req, res) => {
  Inventory.findById(req.params.id).then(item =>
    res.json(item).catch(err => res.status(400).json("Error: " + err))
  );
});

// Delete a specific item
router.route("/:id").delete((req, res) => {
  Inventory.findByIdAndDelete(req.params.id)
    .then(item => res.json("Item Deleted"))
    .catch(err => res.status(400).json("Error :" + err));
});

module.exports = router;
