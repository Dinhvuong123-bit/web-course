# HIT15-WEB-PRIVATE-2024 - WEEK 15

---

#### [Home](../README.html)

---

#### [I. Destructuring](#i-destructuring)

#### [II. Spread](#ii-spread)

#### [III. Rest](#iii-rest)

#### [IV. setTimeout/setInterval](#iv-settimeoutsetinterval)

#### [V. Callback Hell](#v-callback-hell)

#### [VI. Đồng bộ và Bất đồng bộ](#vi-đồng-bộ-synchronous-và-bất-đồng-bộ-asynchronous)

#### [VII. Giới thiệu về Date](#vii-giới-thiệu-về-date-trong-javascript)

#### [VIII. Giới thiệu về Math](#viii-giới-thiệu-về-math-trong-javascript)

---

### I. Destructuring

- **Destructuring** là một tính năng giúp chúng ta trích xuất dữ liệu từ **mảng** hoặc **đối tượng** một cách dễ dàng mà không cần truy cập từng phần tử theo cách thủ công. Từ đó làm giảm đáng kể các dòng mã thao tác tới `mảng` hoặc `đối tượng`
- **Cú pháp:**

```js
// Với mảng
const [var1, var2, ...rest] = array;

// Với object
const { key1, key2, ...rest } = object;
```

- **Destructuring với mảng:**

```js
const numbers = [1, 2, 3, 4, 5];

// Cách truyền thống
const a = numbers[0];
const b = numbers[1];

const [a, b] = numbers;
console.log(a, b); // 1 2

const [x, , y] = numbers;
console.log(x, y); // 1 3

const [, , third] = numbers;
console.log(third); // 3

const [first, ...rest] = numbers;
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]
```

- **Destructuring với object:**

```js
const user = { name: "Alice", age: 25, city: "New York" };

const name = user.name;
const age = user.age;
const city = user.city;

const { name, age } = user;
console.log(name, age); // Alice 25

// Đổi tên biến
const { name: userName, age: userAge } = user;
console.log(userName, userAge); // Alice 25
```

- **Giá trị mặc định khi Destructuring**

```js
const person = { name: "John" };
const { name, age = 30 } = person;
console.log(name, age); // John 30
```

- **Lưu ý:**

  - Destructuring chỉ hoạt động với mảng và object.
  - Khi destructuring object, key phải trùng với key trong object. Có thể gán giá trị mặc định nếu key không tồn tại.
  - Object không có thứ tự, nên destructuring phải dựa vào key thay vì theo vị trí các phần tử trong mảng

### II. Spread

- Spread (`...`) giúp mở rộng mảng hoặc object. Bên cạnh đó spread còn rất nhiều các chức năng hữu dụng khác
  - Sao chép một mảng
  - Tách hoặc kết hợp một hay nhiều mảng
  - Sử dụng mảng như danh sách các đối số (Argument)
  - Thêm một item vào một list
  - Kết hợp các Object
  - Chuyển NodeList thành một Array
- **Cú pháp:**

```js
// Với mảng
const newArray = [...array1, ...array2];

// Với object
const newObject = { ...object1, ...object2 };
```

- **Spread với mảng:**

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
```

- **Spread với object:**

```js
// Create an Object and a copied Object with Object.assign()
const originalObject = { enabled: true, darkMode: false };
const secondObject = Object.assign({}, originalObject);

console.log(secondObject); //{enabled: true, darkMode: false}

// Create an object and a copied object with spread
const originalObject = { enabled: true, darkMode: false };
const secondObject = { ...originalObject };

console.log(secondObject); //{enabled: true, darkMode: false}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 3, c: 4 }
```

💡 Lưu ý: Nếu object có cùng key, key ở object sau sẽ ghi đè object trước.

- **Sao chép mảng:**

```js
const fruits = ["🍏", "🍊", "🍌", "🍉", "🍍"];
//sao chép mảng fruits sang mảng moreFruits
const moreFruits = [...fruits];
console.log(moreFruits); // Array(5) [ "🍏", "🍊", "🍌", "🍉", "🍍" ]
```

- **Sử dụng mảng như danh sách các tham số:**

```js
const fruitStand = ["🍏", "🍊", "🍌"];
const sellFruit = (f1, f2, f3) => {
  console.log(`Fruits for sale: ${f1}, ${f2}, ${f3}`);
};
sellFruit(...fruitStand); // Fruits for sale: 🍏, 🍊, 🍌
fruitStand.pop();
fruitStand.pop();
fruitStand.push("🍉");
fruitStand.push("🍍");
sellFruit(...fruitStand); // Fruits for sale: 🍏, 🍉, 🍍
fruitStand.pop();
fruitStand.pop();
sellFruit(...fruitStand, "🍋"); // Fruits for sale: 🍏, 🍋, undefined
```

- **Thêm phần tử vào mảng:**

```js
// Create an Array
const tools = ["hammer", "screwdriver"];
const otherTools = ["wrench", "saw"];

// Concatenate tools and otherTools together
const allTools = tools.concat(otherTools);

console.log(allTools);

//(4) ["hammer","screwdriver","wrench","saw"]

// Unpack the tools Array into the allTools Array
const allTools = [...tools, ...otherTools];

console.log(allTools);

const ocean = ["🐙", "🦀"];

const aquarium = [...ocean, "🐡"]; // Add a single value
const sushi = [...ocean, "🐡", "🍚"]; // Add multiple values

aquarium; // ['🐙', '🦀', '🐡']
sushi; // ['🐙', '🦀', '🐡', '🍚']

// Original Array Not Affected
ocean; // ['🐙', '🦀']
```

- **Kết hợp 2 hay nhiều object với nhau:**

```js
const objectOne = { hello: "🤪" };
const objectTwo = { world: "🐻" };

// Kết hợp objectOne, objectTwo lại trong objectThree và thêm thuộc tính laugh
const objectThree = { ...objectOne, ...objectTwo, laugh: "😂" };
console.log(objectThree); // Object { hello: "🤪", world: "🐻", laugh: "😂" }

// Tương tự chúng ta có objectFour, với laugh là một hàm
const objectFour = {
  ...objectOne,
  ...objectTwo,
  laugh: () => {
    console.log("😂".repeat(5));
  },
};
objectFour.laugh(); // 😂😂😂😂😂
```

- **Lưu ý:**
  Khi sửu dụng spread operator, chúng sẽ tạo ra một tham chiếu mới, sao chép giá trị của tham chiếu cũ vào tham chiếu mới. Từ đó, mọi thao tác làm thay đổi tham chiếu cũ sẽ không ảnh hưởng đến mảng được sao chép, điều mà sẽ xảy ra nếu chúng ta sao chép mảng sử dụng phương thức gán `=`

  ```js
  const array = ["😉", "😊", "😇"];
  const copyWithEquals = array; // Thay đổi mảng array đồng nghĩa cũng sẽ thay đổi mảng copyWithEquals
  const copyWithSpread = [...array]; // Thay đổi mảng array sẽ không ảnh hưởng đến mảng copyWithSpread

  array[0] = "😡"; //thay đổi phần tử đầu tiên của mảng array

  console.log(...array); // 😡 😊 😇
  console.log(...copyWithEquals); // 😡 😊 😇
  console.log(...copyWithSpread); // 😉 😊 😇
  ```

### III .Rest

- Rest giúp gom nhiều tham số vào một mảng.
- **Rest với Function:**

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

- **Rest với Destructuring:**

```js
const [first, ...rest] = [10, 20, 30, 40];

console.log(first); // 10
console.log(rest); // [20, 30, 40]
```

### IV. setTimeout/setInterval

#### 1. setTimeout()

- setTimeout cho phép thực hiện một hành động nào đó sau một khoảng thời gian trễ được tính bằng mili giây.
- **Cú pháp:**

```js
setTimeout(function, delay);
```

- **function**: Tham số này là một hàm sẽ thực hiện hành động nào đó sau thời gian trì hoãn
- **delay**: Tham số này xác định độ trễ tính bằng mili giây
- **Ví dụ:**

```js
function myFunc() {
  console.log("Hello there!");
}

setTimeout(myFunc, 1000);
```

```js
setTimeout(function () {
  console.log("Hello there!");
}, 1000);
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body style="text-align: center;">
    <h2>JavaScript setTimeout</h2>
    <h3>
      Click below button to increase count value<br />
      after one second
    </h3>
    <button id="myButton">Click me</button>
    <h4 id="result">Count: 0</h4>
    <script>
      const myBtn = document.getElementById("myButton");
      let count = 0;
      myBtn.addEventListener("click", function () {
        const result = document.getElementById("result");
        let intervalId = setTimeout(() => {
          count++;
          result.innerHTML = `Count: ${count}`;
        }, 1000);
      });
    </script>
  </body>
</html>
```

#### 2. setInterval()

- setInterval cho phép thực hiện lặp lại một hành động nào đó sau một khoảng thời gian trễ được tính bằng mili giây.
- **Cú pháp:**

```js
setInterval(function, delay);
```

- **function**: Tham số này là một hàm sẽ thực hiện hành động nào đó sau thời gian trì hoãn
- **delay**: Tham số này xác định độ trễ tính bằng mili giây
- **Ví dụ:**

```js
setInterval(function () {
  console.log("Hello there!");
}, 1000);
```

```js
let num = 0;

setInterval(function () {
  num++;

  console.log("The value is: " + num);
}, 1000);
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body style="text-align: center;">
    <h2>JavaScript setInterval</h2>
    <h3>
      The below count value will increase
      <br />
      automatically after evry one second.
    </h3>
    <h4 id="result">Count: 0</h4>
    <script>
      let count = 0;
      const result = document.getElementById("result");
      let intervalId = setInterval(() => {
        count++;
        result.innerHTML = `Count: ${count}`;
      }, 1000);
    </script>
  </body>
</html>
```

#### 3. Return value và cancel timers

- Hai phương thức **setTimeout()** và **setInterval()** sẽ trả về id để chúng ta có thể hủy bộ đếm dễ dàng

```js
let timeOutId = setTimeout(myFunc, 1000);
let intervalId = setInterval(myFunc, 1000);
```

- Để có thể hủy bộ đếm chúng ta có hai phương thức là **clearTimeout()** và **clearInterval()**

```js
clearTimeout(timeOutId);
clearInterval(intervalId);
```

### V. Callback Hell

- Callback là một hàm, được truyền vào dưới dạng đối số khi gọi hàm, thường được sử dụng để xử lý các thao tác bất động bộ như call api, thực hiện các tác vụ cần thời gian để hoàn thành
- **Ví dụ:**

```js
function fetchData() {
  console.log("⏳ Đang lấy dữ liệu...");

  setTimeout(() => {
    const data = { id: 1, name: "John Doe", email: "john@example.com" };
    console.log("✅ Dữ liệu đã lấy xong!", data);
    return data; // Trả về dữ liệu nhưng không có ai nhận
  }, 2000);
}

function handleData(user) {
  console.log("📌 Dữ liệu người dùng:", user);
}

// Gọi API lấy dữ liệu
const user = fetchData(); // Không có callback
handleData(user); // Gọi ngay sau khi fetchData() chạy
```

```js
function handleData(user) {
  console.log("📌 Dữ liệu người dùng:", user);
}

// Hàm giả lập API gọi dữ liệu từ server (giả sử mất 2 giây để lấy dữ liệu)
function fetchData(callback) {
  console.log("⏳ Đang lấy dữ liệu...");

  setTimeout(() => {
    const data = { id: 1, name: "John Doe", email: "john@example.com" };
    console.log("✅ Dữ liệu đã lấy xong!");
    callback(data); // Gọi callback và truyền dữ liệu vào
  }, 2000);
}

// Gọi API và xử lý dữ liệu khi có kết quả
fetchData(handleData);
```

- **Callback Hell** hay còn gọi là **Pyramid of Doom** xảy ra khi chúng ta lồng quá nhiều callback bên trong nhau, khiến code trở nên khó đọc, khó bảo trì, khó mở rộng, dễ gây lỗi.

```js
function getUser(callback) {
  console.log("🔍 Đang lấy thông tin user...");
  setTimeout(() => {
    const user = { id: 1, name: "John Doe" };
    console.log("✅ User lấy xong!", user);
    callback(user);
  }, 2000);
}

function getOrders(userId, callback) {
  console.log(`📦 Đang lấy danh sách đơn hàng cho userId: ${userId}`);
  setTimeout(() => {
    const orders = [
      { id: 101, productId: 50 },
      { id: 102, productId: 60 },
    ];
    console.log("✅ Đơn hàng lấy xong!", orders);
    callback(orders);
  }, 2000);
}

function getProductDetails(productId, callback) {
  console.log(`🛒 Đang lấy thông tin sản phẩm cho productId: ${productId}`);
  setTimeout(() => {
    const product = { id: productId, name: "Laptop XYZ", price: 1500 };
    console.log("✅ Thông tin sản phẩm lấy xong!", product);
    callback(product);
  }, 2000);
}

// Gọi API theo chuỗi (callback hell)
getUser((user) => {
  getOrders(user.id, (orders) => {
    getProductDetails(orders[0].productId, (product) => {
      console.log("🔹 Hoàn tất lấy dữ liệu sản phẩm:", product);
    });
  });
});
```

### VI. Đồng bộ (Synchronous) và Bất đồng bộ (Asynchronous)

#### 1. Synchronous

- Đồng bộ có nghĩa là các đoạn mã được thực thi tuần tự từng dòng một, tức là lệnh sau chỉ được chạy khi lệnh trước đã hoàn thành
- Đặc điểm:
  - Dễ hiểu, dễ kiểm soát luồng chương trình
  - Khi một tác vụ mất thời gian dài, chương trình sẽ bị chặn

#### 2. Asynchoronous

- Bất động bộ không bị chặn, cho phép tiếp tục chạy các lệnh khác trong khi chờ các tác vụ hoàn thành
- Đặc điểm:
  - Không bị chặn giúp ứng dụng mượt mà hơn
  - Khó kiểm soát luồng, dễ xảy ra callback hell
- Các cơ chế bất đồng bộ

  - `setTimeout()`
  - `setInterval()`
  - `Event Listeners`
  - `Fetch API`
  - `Promise`
  - `async/await`

### VII. **Giới thiệu về `Date` trong JavaScript:**

`Date` là một đối tượng tích hợp trong JavaScript, dùng để làm việc với thời gian và ngày tháng. Bạn có thể sử dụng `Date` để tạo các đối tượng ngày tháng, lấy ngày hiện tại, tính toán sự chênh lệch giữa các ngày, và định dạng ngày giờ theo nhiều cách khác nhau.

#### Một số phương thức cơ bản của `Date`:

- **Tạo đối tượng `Date`:**
  - `new Date()`: Tạo đối tượng `Date` với thời gian hiện tại.
  - `new Date(milliseconds)`: Tạo đối tượng `Date` với một số mili giây tính từ 1/1/1970.
  - `new Date(dateString)`: Tạo đối tượng `Date` từ chuỗi ngày tháng.

```javascript
let currentDate = new Date(); // Lấy ngày giờ hiện tại
console.log(currentDate);

let specificDate = new Date(2025, 1, 4); // Tháng tính từ 0 (Tháng 2 là 1)
console.log(specificDate);
```

- **Lấy các thành phần ngày tháng:**
  - `getFullYear()`: Lấy năm.
  - `getMonth()`: Lấy tháng (tính từ 0, 0 là tháng 1).
  - `getDate()`: Lấy ngày trong tháng.
  - `getDay()`: Lấy thứ trong tuần (0 là Chủ nhật, 1 là Thứ hai, ...).
  - `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`: Lấy giờ, phút, giây, mili giây.

```javascript
let currentDate = new Date();
console.log(currentDate.getFullYear()); // Lấy năm hiện tại
console.log(currentDate.getMonth()); // Lấy tháng hiện tại (0 - 11)
console.log(currentDate.getDate()); // Lấy ngày trong tháng
```

- **Cập nhật các thành phần ngày tháng:**
  - `setFullYear(year)`, `setMonth(month)`, `setDate(date)`, `setHours(hours)`, ...: Cập nhật giá trị tương ứng của đối tượng `Date`.

```javascript
let date = new Date();
date.setFullYear(2023); // Cập nhật năm thành 2023
console.log(date);
```

- **Chuyển đổi `Date` thành chuỗi:**
  - `toISOString()`: Chuyển đối tượng `Date` thành chuỗi ISO 8601.
  - `toString()`: Trả về chuỗi mô tả ngắn gọn về đối tượng `Date`.

```javascript
let date = new Date();
console.log(date.toISOString()); // Chuyển đổi thành chuỗi chuẩn ISO
console.log(date.toString()); // Chuyển đổi thành chuỗi ngày giờ
```

---

### VIII. **Giới thiệu về `Math` trong JavaScript:**

`Math` là một đối tượng tích hợp trong JavaScript cung cấp các hàm toán học cơ bản để xử lý số học, bao gồm các phép toán số học như cộng, trừ, nhân, chia, và các phép toán phức tạp hơn như căn bậc hai, logarit, số mũ, và các hằng số toán học.

#### Một số phương thức cơ bản của `Math`:

- **Các hằng số trong `Math`:**
  - `Math.PI`: Hằng số Pi (khoảng 3.14159).
  - `Math.E`: Hằng số e (khoảng 2.71828).
  - `Math.LN2`: Logarit tự nhiên của 2.
  - `Math.LN10`: Logarit tự nhiên của 10.

```javascript
console.log(Math.PI); // In ra giá trị của Pi
console.log(Math.E); // In ra giá trị của e
```

- **Các phương thức toán học cơ bản:**
  - `Math.abs(x)`: Trả về giá trị tuyệt đối của x.
  - `Math.max(a, b, c, ...)`: Trả về giá trị lớn nhất trong danh sách.
  - `Math.min(a, b, c, ...)`: Trả về giá trị nhỏ nhất trong danh sách.
  - `Math.pow(x, y)`: Tính x mũ y.
  - `Math.sqrt(x)`: Tính căn bậc hai của x.
  - `Math.random()`: Trả về một số ngẫu nhiên từ 0 đến 1.

```javascript
console.log(Math.abs(-10)); // Trả về 10
console.log(Math.max(1, 5, 3, 8)); // Trả về 8
console.log(Math.min(1, 5, 3, 8)); // Trả về 1
console.log(Math.pow(2, 3)); // Tính 2^3 = 8
console.log(Math.sqrt(16)); // Tính căn bậc hai của 16 = 4
console.log(Math.random()); // Trả về một số ngẫu nhiên từ 0 đến 1
```

- **Làm việc với góc và radians:**
  - `Math.sin(x)`: Tính sin của x (x là góc theo radian).
  - `Math.cos(x)`: Tính cos của x (x là góc theo radian).
  - `Math.tan(x)`: Tính tan của x (x là góc theo radian).
  - `Math.toDegrees(x)` và `Math.toRadians(x)` không có sẵn trong `Math`, nhưng bạn có thể chuyển đổi bằng cách sử dụng công thức.

```javascript
console.log(Math.sin(Math.PI / 2)); // Tính sin của 90 độ (Pi/2 radians) = 1
console.log(Math.cos(0)); // Tính cos của 0 độ = 1
```

- **Làm tròn và điều chỉnh số:**
  - `Math.round(x)`: Làm tròn số đến gần nhất.
  - `Math.ceil(x)`: Làm tròn số lên.
  - `Math.floor(x)`: Làm tròn số xuống.
  - `Math.trunc(x)`: Cắt phần thập phân của số.

```javascript
console.log(Math.round(4.7)); // Trả về 5
console.log(Math.ceil(4.1)); // Trả về 5
console.log(Math.floor(4.9)); // Trả về 4
console.log(Math.trunc(4.7)); // Trả về 4
```
