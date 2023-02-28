const total = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let f = total.find((one) => one > 5);
console.log(f);

let f2 = total.find((one) => one === 5);
console.log(f2);

const f3 = total.map((one) => one);
console.log(f3);

const tResult = total.reduce((sum, result) => sum + result, 0);
console.log(tResult);

const relation = [
  { name: "Ashraf", type: "best friend" },
  { name: "Mahim", type: "friend" },
  { name: "Shah", type: "friend" },
  { name: "Sultan", type: "brother" },
];

const final = relation.reduce(
  (sum, result) => sum + result.name + " is my " + result.type + ". ",
  []
);
console.log(final);
