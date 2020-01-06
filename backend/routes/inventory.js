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
  const itemName = req.body.item;
  const itemAmount = req.body.amount;
  const itemCategory = req.body.category;

  const newInventory = {
    item: itemName,
    amount: itemAmount,
    category: itemCategory
  };

  newInventory
    .save()
    .then(() => res.json("Inventory added!"))
    .catch(err => res.status(400).json("Error :" + err));
});

// Update an item
router.route("/update/:id").post((req, res) => {
  Inventory.findById(req.params.id)
    .then(item => res.json(item))
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
