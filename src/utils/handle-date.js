const { DateTime } = require("luxon");
const moment = require("moment");

// const now = DateTime.now();
const now = moment().format();

const formatDate = (inputDate, format) => {
  return moment(inputDate, 'DD/MM/YYYY').format(format);
};

module.exports = { now, formatDate };
