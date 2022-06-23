const jsonDiff = require("json-diff");

// const diffString = jsonDiff.diffString(json1, json2);

const consoleDiffs = (key = "", diffs = { __old: "", __new: "" }) => {
  console.log(
    "There is a difference in ",
    key,
    " : ",
    diffs.__old,
    " --> ",
    diffs.__new
  );
};

const isDiffered = (value) => {
  return value?.__new && value?.__old ? true : false;
};

function getDiffs(data) {
  Object.keys(data).forEach((key) => {
    if (isDiffered(data[key])) {
      consoleDiffs(key, data[key]);
    } else {
      data[key] instanceof Object ? getDiffs(data[key]) : null;
    }
  });
}

function getJsonDiff(jsonData1, jsonData2) {
  const diffData = jsonDiff.diff(jsonData1, jsonData2, { keysOnly: false });
  console.log(diffData);
  getDiffs(diffData);
}
// const diffConsole = diff.keys

module.exports = { getJsonDiff };
