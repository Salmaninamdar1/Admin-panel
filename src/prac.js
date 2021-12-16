const arrLike = { 0: "foo", 1: "bar", 2: "baz", length: 3 };

// bad
const arr1 = Array.prototype.slice.call(arrLike);

// good
const arr2 = Array.from(arrLike);

console.log("a1", arr1, "a2", arr2);
