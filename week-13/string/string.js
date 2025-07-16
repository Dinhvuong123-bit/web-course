// const text = "JavaScript is not fun";
// console.log(text.slice(0, 10)); // "JavaScript"
// console.log(text.slice(11)); // "is not fun"
// console.log(text.slice(-3)); // "fun" (chỉ số âm tính từ cuối chuỗi)
// console.log(text.slice(10) + "..." + text.slice(-3));

// const text = "JavaScript";
// console.log(text.substring(0, 4)); // "Java"
// console.log(text.substring(4)); // "Script"
// console.log(text.substring(4, 0)); // "Java" (hoán đổi tham số)
// console.log(text.substring(-4, 4)); // "Java" (chỉ số âm được coi là 0)

// const text = "   Hello World!   ";
// console.log(text.trim()); // "Hello World!"

// const text = "JavaScript is awesome";
// console.log(text.includes("Java")); // true
// console.log(text.includes("script")); // false (phân biệt chữ hoa/chữ thường)
// console.log(text.includes("Java", 5)); // false (bắt đầu tìm từ chỉ số 5)

// const text = "apple'banana'cherry";
// console.log(text.split("'")); // ["apple", "banana", "cherry"]
// console.log(text.split("'", 2)); // ["apple", "banana"]
// console.log(text.split("")); // ["a", "p", "p", "l", "e"]

// const text = "JavaScript is awesome";
// console.log(text.indexOf("Script")); // 4
// console.log(text.indexOf("is")); // 11
// console.log(text.indexOf("Java", 5)); // -1 (bắt đầu tìm từ chỉ số 5)

// const text = "JavaScript";
// console.log(text.substring(0, 4)); // "Java"
// console.log(text.substring(4)); // "Script"
// console.log(text.substring(4, 0)); // "Java" (tự động đổi thứ tự nếu start > end)

// const text = "I love JavaScript";
// console.log(text.replace("JavaScript", "Python")); // "I love Python"
// console.log(text);
// console.log(text.replace("love", "like")); // "I like JavaScript"

const text = "JavaScript";
console.log(text.charAt(1)); // "J"
console.log(text.charAt(4)); // "S"
console.log(text.charAt(10)); // "" (không tồn tại)
