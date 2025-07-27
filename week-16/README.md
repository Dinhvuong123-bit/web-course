# WEB-PRIVATE-2025 - WEEK 16

---

#### [Home](../README.html)

---

#### [I. Promise](#i-promise)

#### [II. Async/Await](#ii-asyncawait)

#### [III. Fetch API](#iii-fetch-api)

---

Trước đây để có thể xử lý các tác vụ bất đồng bộ, Javascript sử dụng tới **callback** để xử lý. Nhưng nếu có quá nhiều tác vụ cần thực hiện tuần tự, chúng ta sẽ gặp phải **callback hell**, đây là một chuỗi các callback lồng nhau làm code khó đọc và khó bảo trì.

Để xử lý các vấn đề còn tồn đọng trên, Javascript cung cấp cho chúng ta **Promise** và **Async/Await** giúp xử lý các tác vụ bất đồng bộ tối ưu hơn

### I. Promise

#### 1. Promise là gì?

**Promise** là một đối tượng trong Javascript giúp xử lý bất đồng bộ (asynchronous). Nó đại diện cho một giá trị trong tương lai (có thể thành công hoặc thất bại)

#### 2. Các trạng thái của Promise

**Promise** có 3 trạng thái chính:

- **Pending**: Lời hứa chưa được thực hiện (Promise chưa hoàn thành hoặc thất bại)
- **Fulfilled**: Promise được hoàn thành và trả về kết quả (resolve)
- **Rejected**: Promise bị lỗi (reject)

#### 3. Cách tạo và sử dụng Promise

- Cách tạo **Promise**

  ```js
  const promise = new Promise((resolve, reject) => {
    // Xử lý bất đồng bộ
    let success = true; // Giả định tác vụ thành công

    if (success) {
      resolve("Thành công! 🎉"); // Khi hoàn thành thành công
    } else {
      reject("Lỗi xảy ra! ❌"); // Khi thất bại
    }
  });
  ```

  - resolve(value): Gọi khi thành công.
  - reject(error): Gọi khi thất bại.

- Cách sử dụng **Promise**

  ```js
  promise
    .then((result) => {
      console.log("Kết quả:", result); // Xử lý thành công
    })
    .catch((error) => {
      console.log("Lỗi:", error); // Xử lý lỗi
    })
    .finally(() => {
      console.log("Hoàn thành! 🚀"); // Dù thành công hay thất bại, vẫn chạy
    });
  ```

  - `.then()` → Nhận kết quả khi Promise thành công (resolve)
  - .catch() → Nhận lỗi khi Promise thất bại (reject).
  - .finally() → Luôn chạy dù thành công hay thất bại.

#### 4. Ví dụ với setTimeout

```js
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Đã chờ ${ms}ms`);
    }, ms);
  });
}

wait(2000)
  .then((result) => console.log(result)) // "Đã chờ 2000ms"
  .finally(() => console.log("Done! 🚀"));
```

#### 5. Promise Chaining

- **Promise Chaining** là cách nối chuỗi nhiều **Promise** để thực hiện các tác vụ tuần tự, trong đó kết quả của bước trước sẽ được truyền sang bước sau
- Mỗi `.then()` sẽ trả về một Promise nên nó cho phép chaining (xâu chuỗi) nhiều `.then()` liên tiếp, nếu không có return trong callback trong `.then()` thì `.then()` tiếp theo sẽ nhận undefined

```js
function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Lấy thông tin người dùng:", userId);
      resolve({ userId, name: "Nguyễn Văn A" });
    }, 1000);
  });
}

function getOrders(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Lấy danh sách đơn hàng của:", user.name);
      resolve(["order123", "order456"]);
    }, 1500);
  });
}

function getOrderDetails(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Lấy chi tiết đơn hàng:", orderId);
      resolve({ orderId, item: "Laptop", price: 1500 });
    }, 2000);
  });
}

console.log("Bắt đầu...");

getUser(1)
  .then((user) => getOrders(user)) // Bước 1 → Bước 2
  .then((orders) => getOrderDetails(orders[0])) // Bước 2 → Bước 3
  .then((orderDetails) => {
    console.log("🎉 Chi tiết đơn hàng:", orderDetails);
  })
  .catch((error) => console.error("❌ Lỗi:", error));
```

### II. Async/Await

#### 1. Async/Await là gì?

- **async/await** là cú pháp giúp làm việc với Promise dễ dàng hơn
- Nó giúp viết code bất đồng bộ giống như code đồng bộ, dễ đọc hơn
- `async` dùng để khai báo một hàm bất đồng bộ (hàm này luôn trả về Promise)
- `await` dùng để chờ một Promise hoàn thành trước khi tiếp tục

#### 2. Cách hoạt động

##### 2.1. async

- Khi khai báo một hàm với `async`, nó trả về một **promise**
- Nếu trong hàm có return giá trị, giá trị này sẽ được bọc trong một `Promise.resolve()`

```js
async function getNumber() {
  return 10;
}

console.log(getNumber());
// 👉 Kết quả: Promise { 10 }
// (Vì 10 được bọc trong Promise.resolve(10))
```

- Vì nó trả về một Promise nên chúng ta có thể sử dụng `.then()` để lấy ra kết quả từ promise

##### 2.2. await

- `await` chỉ có thể dùng bên trong một hàm `async`
- `await promise` sẽ tạm dừng hàm `async` và đợi **Promise** hoàn thành, sau đó trả về kết quả của **Promise**

```js
async function getData() {
  let result = await Promise.resolve(20);
  console.log(result); // 👉 20
}

getData();
```

#### 3. Ví dụ:

```js
async function fetchOrderDetails() {
  try {
    let user = await getUser(1); // ⏳ Đợi lấy user
    let orders = await getOrders(user); // ⏳ Đợi lấy orders
    let orderDetails = await getOrderDetails(orders[0]); // ⏳ Đợi lấy chi tiết đơn hàng

    console.log("🎉 Chi tiết đơn hàng:", orderDetails);
  } catch (error) {
    console.error("❌ Lỗi:", error);
  }
}

fetchOrderDetails();
```

### III. Fetch API

#### 1. API là gì?

- **API (Application Programming Interface)** là giao diện lập trình ứng dụng, giúp các ứng dụng hoặc hệ thống có thể giao tiếp với nhau

- Ví dụ thực tế:
  - Khi bạn đặt đồ ăn qua ứng dụng Grab, ứng dụng này sẽ gửi yêu cầu đến máy chủ (server) của nhà hàng.
  - Nhà hàng xử lý yêu cầu và gửi phản hồi về ứng dụng.
  - Ứng dụng hiển thị thông tin về đơn hàng của bạn.
    👉 API chính là cầu nối giúp ứng dụng và máy chủ giao tiếp với nhau!

#### 2. Client và Server là gì?

- **Client** (Máy khách)
  - Là thiết bị hoặc ứng dụng gửi yêu cầu (request) đến máy chủ để lấy dữ liệu
  - Ví dụ: Trình duyệt, ứng dụng di động, ứng dụng desktop
- **Server** (Máy chủ):
  - Là hệ thống xử lý yêu cầu từ Client và gửi phản hồi (response) về
  - Ví dụ: Server của Google, Facebook, Amazon...
- **Mô hình Client-Server** hoạt động như thế nào:
  - Client gửi yêu cầu (Request) đến Server
  - Server nhận và xử lý yêu cầu
  - Server gửi phản hồi (Response) về Client
  - Client hiển thị dữ liệu nhận được
- Ví dụ thực tế
  - Nhập `facebook.com` trên trình duyệt -> Client gửi request
  - Máy chủ Facebook xử lý yêu cầu và gửi trang web về -> Server gửi response
  - Trình duyệt hiển thị nội dung của Facebook (Client hiển thị dữ liệu)

#### 3. Fetch API

##### 3.1. Fetch API là gì?

- **Fetch API** là một tính năng của Javascript giúp gửi yêu cầu HTTP để lấy hoặc gửi dữ liệu đến một máy chủ
- Hộ trợ các phương thức HTTP: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`,...
- Vì HTTP Request (Gửi và nhận dữ liệu từ server) không thể thực hiện ngay lập tức. Nếu **Fetch API** hoạt động theo kiểu đồng bộ nó sẽ chặn toàn bộ chương trình cho đến khi nhận được phản hồi từ server, từ đó làm trang web bị treo hoặc bị sập
- **Fetch API** sử dụng Promise để tiếp tục thực thi chương trình trong khi chờ dữ liệu phản hồi. Chính vì vậy ta có thể sử dụng `.then()` hoặc async/await để xử lý

##### 3.2. Các phương thức HTTP hỗ trợ

| **Phương thức** | **Chức năng**                    |
| --------------- | -------------------------------- |
| **GET**         | Lấy dữ liệu từ server (mặc định) |
| **POST**        | Gửi dữ liệu lên server           |
| **PUT**         | Cập nhật dữ liệu trên server     |
| **PATCH**       | Cập nhật dữ liệu trên server     |
| **DELETE**      | Xóa dữ liệu trên server          |

##### 3.3. Cách thành phần kèm theo khi Fetch API

- **Headers**
  - Headers (Tiêu đề HTTP) chứa các thông tin bổ sung về yêu cầu (request) hoặc phản hồi (response)
  - Giúp server và client hiểu cách xử lý dữ liệu
  - Dùng để xác thực, chỉ định kiểu dữ liệu, định dạng phản hồi
  - Một số Headers phổ biến:
    | **Header** | **Mô tả** |
    | --------------- | -------------------------------- |
    | **Content-Type** | Xác định kiểu dữ liệu gửi đi (JSON, XML, FormData) |
    | **Authorization** | Authorization |
    | **Accept** | Chỉ định kiểu dữ liệu mong muốn từ phản hồi (application/json, text/html) |
    | **User-Agent** | Thông tin về trình duyệt hoặc client gửi yêu cầu |
    | **Cache-Control** | Điều khiển bộ nhớ cache |
    | **Origin** | Chỉ định nguồn gốc của yêu cầu (quan trọng với CORS) |
- **Body**

  - Body là phần nội dung của request, thường dùng trong POST, PUT, PATCH để gửi dữ liệu lên server
  - Một số loại body phổ biến:
    | **Body** | **Mô tả** | **Content-Type**
    | --------------- | -------------------------------- | -------------------------------- |
    | **JSON** | Dữ liệu dạng JSON | `application/json`
    | **Form Data** | Gửi dữ liệu dạng biểu mẫu (upload file) | `multipart/form-data` |
    | **URL Encoded** | Gửi dữ liệu giống như form HTML | `application/x-www-form-urlencoded` |
    | **Text** | Gửi dữ dạng văn bản thuần | `text/plain` |

- **Ví dụ**:

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ title: "Hello", body: "Nội dung", userId: 1 }),
})
  .then((response) => response.json())
  .then((data) => console.log("✅ Dữ liệu phản hồi:", data))
  .catch((error) => console.error("❌ Lỗi:", error));
```

- **JSON (JavaScript Object Notation)** là một định dạng dữ liệu nhẹ, dùng để lưu trữ và trao đổi dữ liệu giữa server và client. Nó được thiết kế để dễ đọc cho con người và dễ xử lý cho máy tính.

  ```js
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "isActive": true,
    "hobbies": ["Reading", "Gaming", "Coding"]
  }
  ```

  - Dùng `JSON.stringify()` để chuyển object → JSON string

  ```js
  const user = { name: "Alice", age: 25 };
  const jsonString = JSON.stringify(user);
  console.log(jsonString); // '{"name":"Alice","age":25}'
  ```

  - Dùng `JSON.parse()` để chuyển JSON string → object

  ```js
  const jsonString = '{"name":"Alice","age":25}';
  const user = JSON.parse(jsonString);
  console.log(user.name); // Alice
  ```

  - Khi bạn gọi API bằng fetch(), phản hồi từ server thường ở dạng JSON.

  ```js
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json()) // Chuyển JSON string thành object
    .then((data) => console.log("📌 Dữ liệu JSON:", data));
  ```

##### 3.4. Gửi dữ liệu với Fetch API

**3.3.1. GET (Đơn giản nhất)**

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // Chuyển đổi dữ liệu thành JSON
  .then((data) => console.log("📌 GET - Dữ liệu nhận được:", data))
  .catch((error) => console.error("❌ Lỗi khi gọi API:", error));
```

**3.3.2. POST**

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // Định dạng dữ liệu gửi đi
  },
  body: JSON.stringify({
    title: "Bài viết mới",
    body: "Nội dung bài viết...",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("📌 POST - Dữ liệu sau khi gửi:", data))
  .catch((error) => console.error("❌ Lỗi khi gửi dữ liệu:", error));
```

**3.3.3. PUT**

```js
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: 1,
    title: "Bài viết đã chỉnh sửa",
    body: "Nội dung mới...",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("📌 PUT - Dữ liệu sau khi cập nhật:", data))
  .catch((error) => console.error("❌ Lỗi khi cập nhật dữ liệu:", error));
```

**3.3.4. DELETE**

```js
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => {
    if (response.ok) {
      console.log("📌 DELETE - Dữ liệu đã bị xóa thành công!");
    } else {
      console.error("❌ Xóa thất bại!");
    }
  })
  .catch((error) => console.error("❌ Lỗi khi xóa dữ liệu:", error));
```

##### 3.5. Fetch API với Async await

**3.5.1. GET**

```js
async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json(); // Chuyển kết quả thành JSON
    console.log("✅ Dữ liệu nhận được:", data);
  } catch (error) {
    console.error("❌ Lỗi xảy ra:", error);
  }
}

getData();
```

**3.5.2. POST**

```js
async function createPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // Phương thức HTTP
      headers: {
        "Content-Type": "application/json", // Định dạng dữ liệu gửi đi
      },
      body: JSON.stringify({
        title: "Bài viết mới",
        body: "Nội dung của bài viết",
        userId: 1,
      }),
    });

    const data = await response.json();
    console.log("✅ Bài viết đã được tạo:", data);
  } catch (error) {
    console.error("❌ Lỗi xảy ra:", error);
  }
}

createPost();
```
