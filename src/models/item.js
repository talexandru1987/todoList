const { Schema, model } = require("mongoose");

const itemsSchema = {
  name: {
    type: String,
    required: true,
  },
};

const schema = new Schema(itemsSchema);

const Item = model("Item", schema);

module.exports = Item;
