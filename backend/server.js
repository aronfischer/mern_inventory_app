const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const inventoryRouter = require("./routes/inventory");
app.use("/inventory", inventoryRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
