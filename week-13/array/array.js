// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
// const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits

// // Print the array and its length

// console.log("Numbers:", numbers);
// console.log("Number of numbers:", numbers.length);

// console.log("Fruits:", fruits);
// console.log("Number of fruits:", fruits.length);

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ]; // List of web technologies

// console.log(webTechs); // all the array items
// console.log(webTechs.length); // => to know the size of the array, which is 7
// console.log(webTechs[0]); //  -> HTML
// console.log(webTechs[6]); //  -> MongoDB

// let lastIndex = webTechs.length - 1;
// console.log(webTechs[lastIndex]); // -> MongoDB

//  const arr = [1, 2, 3, 4];
// console.log(arr.length); // 4

// const arr = [1, 2];
// arr.push("javascript");
// console.log(arr); // [1, 2, 3, 4]

// const arr = [1, 2, 3];
// const lastElement = arr.pop();
// console.log(arr); // [1, 2]
// console.log(lastElement); // 3

// const arr = [1, 2, 3, 4];
// arr.splice(1, 2); // Xóa 2 phần tử từ vị trí 1, thêm 5 và 6
// console.log(arr); // [1, 5, 6, 4]

// const arr = [1, 2, 3, 4];
// const newArr = arr.slice(-2); // Trích xuất từ vị trí 1 đến 3 (không bao gồm 3)
// console.log(newArr); // [2, 3]

// const arr = [1, 2, 3, 4];
// console.log(arr.indexOf(3)); // 2
// console.log(arr.indexOf(5)); // -1

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];
// const newArr = arr2.concat(arr1, arr3);
// console.log(newArr); // [1, 2, 3, 4]

//   const arr = [1, 2, 3];
//   console.log(arr.includes(2)); // true
// console.log(arr.includes(4)); // false

// const arr = ["apple", "banana", "cherry"];
// console.log(arr.join(", ")); // "apple, banana, cherry"

// const arr = [1, 3, 2];
// console.log(arr.reverse()); // [3, 2, 1]

const arr = [4, 2, 3, 3300];
// arr.sort((a, b) => a - b); // Sắp xếp theo thứ tự tăng dần
arr.sort(function (a, b) {
  return b - a;
});
console.log(arr); // [1, 2, 3, 4]

const arr2 = ["b", "d", "a", "c", 1, 2, 3];
arr2.sort();
console.log(arr2);

//   const arr = [1, 2, 3];
//   console.log(arr.shift()); // 1
// console.log(arr); // [2, 3]

//   const arr = [2, 3];
//   arr.unshift(1);
//   console.log(arr); // [1, 2, 3]
