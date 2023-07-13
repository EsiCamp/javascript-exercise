const _ = require("lodash");

let obj = {
  age: 12,
  fullName: {
    firstName: "Ehsan",
    lastName: "Tashakkori",
  },
  gender: function () {
    console.log("male");
  },
};

let copyObj = _.cloneDeep(obj);

console.log(copyObj);
