const { getDate, getDay } = require("../../utils/date");
const { Item } = require("../../models");


//return all to do items from the server
const getListItems = async (req, res) => {
  const itemList = await Item.find();
  res.render("list", { listTitle: getDate(), listItemes: itemList });
};

module.exports = { getListItems };
