// const empty = {};

// const person = {
//   name: "John",
//   age: 30,
//   isStudent: false,
// };

// const person = {
//   name: "John",
//   greet: function () {
//     console.log("Hello, " + this.name);
//   },
// };
// person.greet(); // Output: Hello, John
// console.log(person);

// const person = { name: "John", "is-student": true };
// console.log(person.name); // John
// console.log(person["is-student"]); // 30
// person.age = 30;
// person["is-vietnam"] = false;
// console.log(person);

// const person = { name: "John" };
// person.age = 30; // Thêm key mới
// person["isStudent"] = true; // Thêm key mới
// console.log(person); // { name: 'John', age: 30, isStudent: true }

// const person = { name: "John" };
// const details = { age: 30, country: "USA" };
// let empty = { "is-student": true };
// const mergedPerson = Object.assign(empty, person, details);
// console.log(mergedPerson); // { name: 'John', age: 30, country: 'USA' }

// empty = details;

// console.log(empty);

// const person = { name: "John", age: 30 };
// console.log(Object.keys(person)); // ['name', 'age']

// const person = { name: "John", age: 30 };
// console.log(Object.values(person)); // ['John', 30]

// const person = { name: "John", age: 30 };
// console.log(Object.entries(person)); // [['name', 'John'], ['age', 30]]

// const person = { name: "John", age: 30 };
// console.log(person.hasOwnProperty("name")); // true
// console.log(person.hasOwnProperty("gender")); // false

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 15000,
    category: "Electronics",
    stock: 50,
    description: "A high-performance smartphone with 128GB storage.",
  },
  {
    id: 2,
    name: "Laptop",
    price: 30000,
    category: "Electronics",
    stock: 20,
    description: "A lightweight laptop with a long battery life.",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 2000,
    category: "Accessories",
    stock: 100,
    description: "Compact wireless earbuds with noise-canceling feature.",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 5000,
    category: "Wearable",
    stock: 30,
    description: "A smartwatch with health tracking and GPS.",
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: 1200,
    category: "Accessories",
    stock: 80,
    description: "An ergonomic gaming mouse with RGB lighting.",
  },
];

const container = document.querySelector(".container");

for (let i = 0; i < products.length; i++) {
  console.log(products[i].name);
  const item = document.createElement("div");
  item.innerHTML = `
    <p class="name"><span>Tên:</span> ${products[i].name}</p>
    <p class="cate"><span>Loại:</span> ${products[i].category}</p>
    <p class="desc"><span>Mô tả:</span> ${products[i].description}</p>
    <p class="price"><span>Giá:</span> ${products[i].price}</p>
    <p class="stock"><span>Số lượng:</span> ${products[i].stock}</p>
  `;

  container.appendChild(item);
}
