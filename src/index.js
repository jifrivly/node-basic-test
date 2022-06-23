const fs = require("fs");
const path = require("path");

const { getJsonDiff } = require("./utils/json-check");
const { now, formatDate } = require("./utils/handle-date");
const { evaluate } = require("./utils/evaluate");

console.log("\n--- 1.1 ---------------------\n");

const inputDate = "26/08/1990";

const format1 = formatDate(inputDate, "MM-DD-YYYY");
const format2 = formatDate(inputDate, "YYYY-MM-DD");
const format3 = formatDate(inputDate, "MMM DD YYYY");

console.log(format1);
console.log(format2);
console.log(format3);

console.log("\n--- 1.2 ---------------------\n");
const json1 = {
  name: "prince",
  age: "44",
  marks: {
    subject1: 20,
    subject2: 45,
  },
};

const json2 = {
  name: "Ebin",
  age: "44",
  marks: {
    subject1: 21,
    subject2: 45,
  },
};

getJsonDiff(json1, json2);

console.log("\n--- 1.3 ---------------------\n");
const expression1 = "12+34";
const expression2 = "10-3";

console.log(evaluate(expression1));
console.log(evaluate(expression2));

console.log("\n--- 1.4 ---------------------\n");

const sampleJson = {
  id: 12,
  name: "Jifri",
  company: "Factweavers",
  designation: "Software Engineer",
  projects: { id: 101, name: "pingar" },
  training: ["react", "communication", "nodejs", "angular advanced"],
};

console.log({ sampleJson });

let copy1 = { ...sampleJson };
let copy2 = Object.assign(sampleJson);
let copy3 = JSON.parse(JSON.stringify(sampleJson));

copy1.name = "new copy 1";
copy2.name = "new copy 2";
copy1.projects.name = "replaced by copy 1";
copy2.training[0] = "replaced by copy 2";

copy3.name = "new copy 3";
copy3.training[1] = "replaced by copy 3";
copy3.training[2] = "2 replaced by copy 3";
copy3.training[3] = "3 replaced by copy 3";

console.log({ copy1 });
console.log({ copy2 });
console.log({ copy3 });
console.log({ sampleJson });

console.log("\n--- 1.4 ---------------------\n");

// fs.readFile("src/assets/sample.csv", "utf-8", (err, data) => {
//   if (err) console.error(err);
//   else console.log(data);
// });

console.log("\n--- 3 ---------------------\n");

const obj1 = { id: 1, name: "name1" };
const arr1 = [1, 3, 4];

console.log({ obj1 });
console.log({ arr1 });
console.log("--------- instanceof method -------");
console.log("obj1 is an object : ", obj1 instanceof Object);
console.log("arr1 is an object : ", arr1 instanceof Object);

console.log("--------- constructor === Object method -------");
console.log("obj1 is an object : ", obj1.constructor === Object);
console.log("arr1 is an object : ", arr1.constructor === Object);

console.log("--------- constructor === Array method -------");
console.log("obj1 is an Array : ", obj1.constructor === Array);
console.log("arr1 is an Array : ", arr1.constructor === Array);

console.log("--------- Array.isArray method -------");
console.log("obj1 is an array : ", Array.isArray(obj1));
console.log("arr1 is an array : ", Array.isArray(arr1));
