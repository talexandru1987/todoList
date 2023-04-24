const { Item } = require("../../models");

const createListItem = async (req, res) => {
  try {
    const insertItem = new Item({
      name: req.body.todoItem,
    });

    await Item.create(insertItem);
    return res.redirect("/");
  } catch (error) {
    console.log(`[ERROR]: Failed to get students | ${error.message}`);
    return res.status(500).json({ success: false, error: "Failed to add list item" });
  }
};

module.exports = { createListItem };
