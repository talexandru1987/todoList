const getDate = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return date.toLocaleDateString("en-us", options);
};

const getDay = () => {
  const date = new Date();
  const options = {
    weekday: "long",
  };

  return date.toLocaleDateString("en-us", options);
};
module.exports = { getDate, getDay };
