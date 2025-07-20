# HIT15-WEB-PRIVATE-2024 - WEEK 14

---

#### [Home](../README.html)

---

#### [I. Function](#i-function)

#### [II. Làm việc với mảng](#ii-làm-việc-với-mảng)

---

#### I. Function

**1. Function là gì?**

- Function hay hàm là một khối các câu lệnh được định nghĩa để thực hiện một nhiệm vụ hay một hành động cụ thể nào đó
- Hàm phục vụ những mục đích sau:
  - **Tái sử dụng mã**: Thay vì viết lặp lại cùng một đoạn mã nhiều lần, chúng ta chỉ cần định nghĩa hàm một lần và gọi lại khi cần 👉 tiết kiệm được thời gian và công sức
  - **Tổ chức mã tốt hơn**: Việc chia chương trình thành các đoạn mã nhỏ sẽ giúp đọc hiểu, quản lý và bảo trì chương trình dễ dàng hơn
- **Cú pháp**:

```js
function tenHam(thamSo1, thamSo2, ...) {
    // Các dòng lệnh thực thi
    return giaTri; // (Tùy chọn) Trả về một giá trị
}

tenHam(thamSo1, thamSo2, ...);
```

- **Lưu ý:**

  - Tên hàm phải được bắt đầu bằng chữ cái (a-z,A-Z) hoặc ký tự `_`.
  - Tên hàm không được bắt đầu bằng số, các ký tự khác ký tự `_`.
  - Một hàm có thể gọi lại chính nó, hay còn gọi là đệ quy

- **Ví dụ**:

```js
function sumMoney(a, b) {
  return a + b;
}

const total = sumMoney(10, 20);
console.log(total);
```

```js
function sayHello() {
  console.log("Hello world");
}

sayHello();
```

```js
function factorial(n) {
  if (n == 0 || n == 1) return 1;
  else return n * factorial(n - 1);
}

var a, b, c;
a = factorial(1); // a gets the value 1
b = factorial(2); // b gets the value 2
c = factorial(3); // c gets the value 6
```

**2. Tham số (Parameters), đối số (arguments)**

**2.1. Tham số (parameters)**

- Tham số là các biến được định nghĩa trong khi khai báo hàm. Chúng đóng vai trò là giá trị đầu vào mà hàm yêu cầu để thực hiện một nhiệm vụ cụ thể nào đó
- **Ví dụ**
  ```js
  function greet(name) {
    console.log(`Xin chào, ${name}!`);
  }
  ```

**2.2. Đối số (arguments)**

- Đối số là giá trị thực tế được truyền vào tham số của hàm khi hàm được gọi.
- Mỗi đối số sẽ được gán vào tham số tương ứng trong định nghĩa hàm.
- **Ví dụ:**

  ```js
  greet("Nam");
  ```

**2.3. Lưu ý**

- Số lượng tham số và đối số phải khớp nhau

  ```js
  function multiply(a, b) {
    return a * b;
  }
  console.log(multiply(4, 5)); // Output: 20
  ```

- Nếu truyền không đủ đối số, các tham số còn thiếu sẽ gán giá trị mặc định là undifined.

  ```js
  function greet(name) {
    console.log(`Xin chào, ${name}!`);
  }
  greet(); // Output: Xin chào, undefined!
  ```

- Giá trị mặc định của tham số (Default Parameters):
  Trong JavaScript, chúng ta có thể cung cấp giá trị mặc định cho tham số để tránh lỗi khi không truyền đủ đối số.

  ```js
  function greet(name = "bạn") {
    console.log(`Xin chào, ${name}!`);
  }
  greet(); // Output: Xin chào, bạn!
  greet("Mai"); // Output: Xin chào, Mai!
  ```

- Số lượng đối số không xác định (Rest Parameters):
  Nếu chúng ta muốn một hàm nhận bất kỳ số lượng đối số nào, bạn có thể sử dụng rest parameters với dấu **`...`**

  ```js
  function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }

  console.log(sum(1, 2, 3, 4)); // Output: 10
  console.log(sum(10, 20)); // Output: 30
  ```

  ```js
  function printNumbers(...numbers) {
    for (const num of numbers) {
      console.log(num);
    }
  }

  printNumbers(5, 10, 15, 20);
  // Output:
  // 5
  // 10
  // 15
  // 20
  ```

**3. Function Scope**

- Các biến được định nghĩa bên trong một hàm không thể truy cập từ ngoài hàm vì nó được định nghĩa trong phạm vi của hàm
- Một hàm có thể truy cập đến mọi biến và mọi hàm khác trong cùng phạm vi mà nó được định nghĩa

```js
// Các biến sau được định nghĩa trong phạm vi global scope
var num1 = 20,
  num2 = 3,
  name = "Khoa";

// Hàm này được định nghĩa trong phạm vi global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// Một ví dụ hàm lồng nhau
function getScore() {
  var num1 = 50,
    num2 = 50;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // Returns "Khoa scored 100"
```

**2. Các loại function**

**2.1. Function Declarations**

- Đây là hàm được định nghĩa bằng từ khóa **`function`** và có tên hàm.
- Loại hàm này có thể gọi trước khi được định nghĩa nhờ **hoisting**
- **Cú pháp:**

```js
function tenHam(thamSo1, thamSo2) {
  // Các lệnh thực thi
  return thamSo1 + thamSo2;
}

// Gọi hàm
console.log(tenHam(2, 3)); // Output: 5
```

**2.2. Function Expressions**

- Hàm được gán vào một biến
- Hàm này không thể được gọi trước khi khai báo vì nó không được **hoisted**
- **Cú pháp:**

```js
const tenHam = function (thamSo1, thamSo2) {
  return thamSo1 + thamSo2;
};

console.log(tenHam(2, 3)); // Output: 5
```

**2.3. Arrow functions**

- **Arrow Function** là một cú pháp mới để viết các hàm trong Javascript.
- Nó giúp tiết kiệm thời gian phát triển và đơn giản hóa phạm vi function
- **Cú pháp:**

```js
const tenHam = (thamSo1, thamSo2) => thamSo1 + thamSo2;

console.log(tenHam(2, 3)); // Output: 5
```

- **Ví dụ:**

```js
const multiply = (x, y) => {
  return x * y;
};

const phraseSplitterEs6 = (phrase) => phrase.split(" ");
console.log(phraseSplitterEs6("Love Codelearn")); // ["Love", "Codelearn"]

const hello = () => {
  console.log("Hello World");
};

hello();
```

**2.3. Anonymous Function**
Hàm không có tên, thường được dùng như callback hoặc gán cho một biến

```js
button.addEventListener("click", function () {});
button.addEventListener("click", () => {});
```

**3. Callback Function**

- Đây là một hàm và được được truyền qua đối số khi gọi hàm khác

```js
function myFunction(param) {
  param("Khang");
}

function myCallback(name) {
  console.log(`Hello ${name}`);
}
myFunction(myCallback);
```

#### II. Làm việc với mảng

Cho một mảng sau:

```js
const courses = [
  { id: 1, name: "Javascript", coin: 200 },
  { id: 2, name: "HTML, CSS", coin: 0 },
  { id: 3, name: "PHP", coin: 100 },
  { id: 4, name: "Angular", coin: 0 },
];
```

**1. `forEach`**

**Cú pháp:**

```js
array.forEach(callback(currentValue, index, array));
```

```js
courses.forEach(function (course, index) {
  console.log(index, course);
});
```

- Tham số đầu tiên là phần tử của mảng
- Tham số thứ hai là index của phần tử trong mảng

**2. `every`**

- Kiểm tra tất cả phần tử của một mảng phải thỏa mãn một điều kiện nào đó
- Thỏa mãn điều kiện sẽ trả về true, còn lại trả về false
- Kiểm tra lần lượt theo thứ tự trong mảng, chỉ cần 1 phần tử trong mảng sai điều kiện thì sẽ dừng lại và trả về kết quả
- **Cú pháp:**

```js
array.every(callback(currentValue, index, array));
```

```js
var isFree = courses.every(function (course, index) {
  return course.coin === 0;
});

console.log(isFree);
```

**3. `some`**

- Duyệt mảng như every và forEach tuy nhiên chỉ cần có một phần tử trong mảng thỏa mãn điều kiện, vòng lặp sẽ ngay lập tức dừng lại
- **Cú pháp:**

```js
array.some(callback(currentValue, index, array));
```

```js
var isFree = courses.some(function (course, index) {
  return course.coin === 0;
});

console.log(isFree);
```

**4. `find`**

- Dùng để tìm kiếm trong mảng
- Nếu có sẽ trả về chính phần tử đó, nếu không có sẽ trả về `undefined`
- Nó lặp qua từng phần tử, hàm được gọi lại sẽ trả về phần tử, kiểm tra với điều kiện nếu thỏa mãn thì vòng lặp sẽ dừng, trả về đối tượng đầu tiên tìm được
- **Cú pháp:**

```js
array.find(callback(currentValue, index, array));
```

```js
var course = courses.find(function (course, index) {
  return course.name === "Angular";
});

console.log(course);
```

**5. `filter`**

- Tương tự như `find` nhưng sẽ trả về tất cả các phần tử thỏa mãn điều kiện
- **Cú pháp:**

```js
array.filter(callback(currentValue, index, array));
```

```js
var course = courses.filter(function (course, index) {
  return course.coin >= 100;
});

console.log(course);
```

**6. `map`**

- Được sử dụng khi muốn thay đổi các phần tử, giá trị trong mảng và sẽ trả về một mảng mới từ mảng gốc, không làm thay đổi mảng gốc
- **Cú pháp:**

```js
array.filter(callback(currentValue, index, array));
```

```js
var course = courses.map(function (course, index, currentArray) {
  return course.coin >= 100;
});

console.log(course);
```

**7. `reduce`**

- Tích lũy các phần tử của mảng thành một giá trị duy nhất (số, chuỗi, đối tượng, v.v.).

- **Cú pháp:**

  ```js
  array.reduce(callback(accumulator, currentValue, index, array), initialValue);
  ```

  - `callback`: Hàm được gọi cho từng phần tử.
  - `accumulator`: Giá trị tích lũy từ lần gọi trước.
  - `currentValue`: Giá trị hiện tại của phần tử.
  - `initialValue` (tuỳ chọn): Giá trị khởi tạo của accumulator. Nếu không được cung cấp, phần tử đầu tiên của mảng sẽ được dùng.

```js
var course = courses.reduce(function (course, index, currentArray) {
  return course.coin >= 100;
});
console.log(course);
```
