# HIT15-WEB-PRIVATE-2024 - WEEK 11

---

## [Home](../README.html)

---

## [1. DOM là gì](#1-dom-là-gì)

## [2. Getting Element](#2-getting-element)

## [3. Adding attribute](#3-adding-attribute)

## [4. classList](#4-classlist)

## [5. Adding Text to HTML element](#5-adding-text-to-html-element)

## [6. Adding style](#6-adding-style)

## [7. Manipulating DOM](#7-manipulating-dom)

## [8. Event Listeners](#8-event-listeners)

---

### 1. DOM là gì?

DOM hay Document Object Model là một cấu trúc dữ liệu mô tả nội dung, cấu trúc và cách thành phần của tài liệu dưới dạng cây (tree structure)

Mỗi thành phần của tài liệu, chẳng hạn như các thẻ HTML, thuộc tính và nội dung văn bản được biểu diện dưới dạng một node (nút) trong cây DOM

Bằng cách sử dụng Javascript, ta có thực hiện một số tùy chỉnh như lấy, tạo, thêm và xóa các thành phần HTML

### 2. Getting Element

Để có thể lấy ra và tùy chỉnh các thành phần HTML, ta có rất nhiều cách khách nhau:

Cho ví dụ sau đây:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document Object Model</title>
  </head>
  <body>
    <h1 class="title" id="first-title">First Title</h1>
    <h1 class="title" id="second-title">Second Title</h1>
    <h1 class="title" id="third-title">Third Title</h1>
    <h1></h1>
  </body>
</html>
```

#### 2.1. Getting elements by tag name

Cú pháp:

```js
// syntax
document.getElementsByTagName("tagname");
```

- Hàm này nhận đối số là tên thẻ và trả về một đối tượng HTMLCollection (HTMLCollection là một mảng các đối tượng thành phần HTML)
- Để có thể truy cập tới từng thành phần này, ta chỉ có thể sử dụng vòng lặp thông thường để lặp qua từng phần tử.

```js
const allTitles = document.getElementsByTagName("h1");
/* Biến allTitles này là một HTMLCollections*/

console.log(allTitles); //HTMLCollections
console.log(allTitles.length); // Độ dài của HTMLCollections là 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]);
}
/* Sử dụng vòng lặp để duyệt qua các thành phần trong HTMLCollections*/
```

#### 2.2. Getting elements by class name

```js
//syntax
document.getElementsByClassName("classname");
```

- Hàm này nhận đối số là tên class và trả về một đối tượng HTMLCollection (HTMLCollection là một mảng các đối tượng thành phần HTML)
- Để có thể truy cập tới từng thành phần này, ta chỉ có thể sử dụng vòng lặp thông thường để lặp qua từng phần tử.

```js
const allTitles = document.getElementsByClassName("title");

console.log(allTitles); //HTMLCollections
console.log(allTitles.length); // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]); // prints each elements in the HTMLCollection
}
```

#### 2.3. Getting an element by id

```js
//syntax
document.getElementById("id");
```

Hàm này nhận đối số là tên id không có kí tự **`#`** và trả về một đối tượng HTMLCollection (HTMLCollection là một mảng các đối tượng thành phần HTML)

```js
let firstTitle = document.getElementById("first-title");
console.log(firstTitle); // <h1>First Title</h1>
```

#### 2.4. Getting elements by using querySelector methods

Hàm `document.querySelector` có thể chọn một thành phần HTML hay nhiều thành phần HTML bằng tên thẻ, id hay tên class tương tự như CSS Selector

1. **`querySelector`**:

- Được sử dụng để chọn thành phần HTML bằng tên thẻ, id hoặc class
- Lưu ý cách chọn này chỉ trả về phần tử HTML đầu tiên.

```js
let firstTitle = document.querySelector("h1"); // select the first available h1 element
let firstTitle = document.querySelector("#first-title"); // select id with first-title
let firstTitle = document.querySelector(".title"); // select the first available element with class title
```

2. **`querySelectorAll`**

- Được sử dụng để chọn nhiều thành phần HTML có cùng tên thẻ hoặc class
- Hàm này sẽ trả về một nodeList là một mảng các đối tượng thành phần HTML và hỗ trợ các hàm hỗ trợ cho mảng
- Có thể sử dụng vòng lặp để duyệt qua mảng này

```js
const allTitles = document.querySelectorAll('h1') # selects all the available h1 elements in the page

console.log(allTitles.length) // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}
```

### 3. Adding attribute

Thông qua javascript có thể thêm được một số thuộc tính(attribute) cho một thành phần như id, class, src, style, href, alt.

#### 3.1. Adding attribute using setAttribute

```js
//syntax
.setAttribute(name, value)
```

Với hàm **`setAttribute()`**, ta có thể xét các thuộc tính cho các thành phần với 2 đối số cần truyền vào đó là `tên tham số` và `giá trị tham gia`

```js
const titles = document.querySelectorAll("h1");
titles[3].setAttribute("class", "title");
titles[3].setAttribute("id", "fourth-title");
```

#### 3.2. Adding attribute without setAttribute

Có một cách khác để xét thuộc tính cho 1 thành phần bằng cách như sau:

```js
//another way to setting an attribute
const titles = document.querySelectorAll("h1");
titles[3].className = "title";
titles[3].id = "fourth-title";
```

### 4. classList

#### 4.1. Adding class using add in classList

Hàm **`add()`** trong classList được sử dụng để thêm một class cho thành phần HTML thay vì ghi đè như cách thêm thuộc tính ở trên

```js
//another way to setting an attribute: append the class, doesn't over ride
const titles = document.querySelectorAll("h1");
titles[3].classList.add("title", "header-title");
```

Đối số truyền vào là

### 4.2. Removing class using remove in classList

Ta có thể xóa một class cụ thể khỏi một thành phần bằng hàm **`remove()`** của classList

```js
titles[3].classList.remove("title", "header-title");
```

### 5. Adding Text to HTML element

Một thành phần HTML bao gồm thẻ mở, thẻ đóng và nội dung, ta có thể thêm nội dung của thành phần đó bằng thuộc tính **`textContent`** hoặc **`innerHTML`**

#### 5.1. Adding Text content using textContent

```js
const titles = document.querySelectorAll("h1");
titles[3].textContent = "Fourth Title";
```

#### 5.2. Adding Text Content using innerHTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
      <h1>Asabeneh Yetayeh challenges in 2020</h1>
      <h2>30DaysOfJavaScript Challenge</h2>
      <ul></ul>
    </div>
    <script>
      const lists = `
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`;
      const ul = document.querySelector("ul");
      ul.innerHTML = lists;
    </script>
  </body>
</html>
```

### 6. Adding Style

Ta có thể tạo kiểu cho thành phần thông qua **`style`** và tên thuộc tính

```js
const titles = document.querySelectorAll("h1");
titles.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = "green";
  } else {
    title.style.color = "red";
  }
});
```

```js
const titles = document.querySelectorAll("h1");
titles.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = "green";
  } else {
    title.style.backgroundColor = "red";
  }
});
```

- Chú ý tên các thuộc tính trong js sẽ viết ở dạng camelCase khi thuộc tính css có 2 từ trở lên, còn không sẽ phải viết thường tất cả
  Ví dụ: color - color, background-color - backgroundColor

### 7. Manipulating DOM

#### 7.1. Creating an Element

Để có thể thể tạo thêm một thành phần HTML, ta sử dụng hàm **`createElement()`** với đối số truyền vào là tên thẻ

```js
// syntax
document.createElement("tagname");
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <script>
      let title = document.createElement("h1");
      title.className = "title";
      title.style.fontSize = "24px";
      title.textContent = "Creating HTML element DOM Day 2";

      console.log(title);
    </script>
  </body>
</html>
```

#### 7.2. Creating Elements

- Để có thể tạo nhiều thành phần HTML, ta sẽ sử dụng vòng lặp và số lần lặp là số thành phần HTML ta muốn tạo

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <script>
      let title;
      for (let i = 0; i < 3; i++) {
        title = document.createElement("h1");
        title.className = "title";
        title.style.fontSize = "24px";
        title.textContent = i;
        console.log(title);
      }
    </script>
  </body>
</html>
```

#### 7.3. Appending child to a parent element

- Để có thể thêm một thành phần vào một thành phần cha như là một thành phần con, ta cần lấy ra và truy cập tới thành phần HTML cha, sau đó sử dụng hàm **`appendChild()`**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <script>
      // creating multiple elements and appending to parent element
      let title;
      for (let i = 0; i < 3; i++) {
        title = document.createElement("h1");
        title.className = "title";
        title.style.fontSize = "24px";
        title.textContent = i;
        document.body.appendChild(title);
      }
    </script>
  </body>
</html>
```

#### 7.4. Removing a child element from a parent node

Ta có thể xóa một hay nhiều thành phần bằng cách sử dụng **`removeChild()`**

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Removing child Node</h1>
    <h2>Asabeneh Yetayeh challenges in 2020</h1>
    <ul>
        <li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Done</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>
    </ul>

    <script>
        /* Sử dụng querySelector để lấy ra thẻ ul */
        const ul = document.querySelector('ul')
        /* Sử dụng querySelectorAll để lấy ra tất cả thẻ li*/
        const lists = document.querySelectorAll('li')
        /* Sử dụng vòng lặp duyệt qua mảng các thẻ li và gọi hàm removeChild() thực hiện xóa từng thẻ li khỏi thẻ ul */
        for (const list of lists) {
            ul.removeChild(list)
        }
    </script>
</body>

</html>
```

Bên cạnh đó, ta cũng có thể sử dụng **`.innetHTML`** để thực hiện xóa thành phần HTML như sau:

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Removing child Node</h1>
    <h2>Asabeneh Yetayeh challenges in 2020</h1>
    <ul>
        <li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Done</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>
    </ul>

    <script>
        const ul = document.querySelector('ul')
        ul.innerHTML = ''
    </script>
</body>

</html>
```

### 8. Event Listeners

#### 8.1. Event

- Bên cạnh các sự kiện như: `onclick`, `onchange`, `onmouseover`, `onmouseout`, `onkeydown`, `onkeyup`, `onload`, ta có thể thêm lắng nghe sự kiện bằng cách sử dụng hàm **`addEventListener()`** để lắng nghe các sự kiện khác nhau của các thành phần HTML

```js
selectedElement.addEventListener("eventlistner", function (e) {
  // the activity you want to occur after the event will be in here
});
```

- Hàm **`addEventListener()`** này nhận hai đối số là `tên sự kiện`, `hàm callback`

1. Sự kiện Click chuột

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button>Click Me</button>

    <script>
      const button = document.querySelector("button");
      button.addEventListener("click", (e) => {
        console.log("e gives the event listener object:", e);
        console.log("e.target gives the selected element: ", e.target);
        console.log(
          "e.target.textContent gives content of selected element: ",
          e.target.textContent
        );
      });
    </script>
  </body>
</html>
```

Ta cũng có thể lắng nghe sự kiện trực tiếp trong thành phần HTML như sau:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button onclick="clickMe()">Click Me</button>
    <script>
      const clickMe = () => {
        alert("We can attach event on HTML element");
      };
    </script>
  </body>
</html>
```

2. Sự kiện mouse enter

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button>Click Me</button>
    <script>
      const button = document.querySelector("button");
      button.addEventListener("mouseenter", (e) => {
        console.log("e gives the event listener object:", e);
        console.log("e.target gives the selected element: ", e.target);
        console.log(
          "e.target.textContent gives content of selected element: ",
          e.target.textContent
        );
      });
    </script>
  </body>
</html>
```

Ngoài ra, ta còn có các sự kiện như sau

- **click** - Khi phần tử được nhấp chuột.
- **dblclick** - Khi phần tử được nhấp chuột hai lần liên tiếp.
- **mouseenter** - Khi con trỏ chuột di chuyển vào trong phần tử.
- **mouseleave** - Khi con trỏ chuột rời khỏi phần tử.
- **mousemove** - Khi con trỏ chuột di chuyển trên phần tử.
- **mouseover** - Khi con trỏ chuột di chuyển vào phần tử hoặc phần tử con bên trong.
- **mouseout** - Khi con trỏ chuột rời khỏi phần tử hoặc rời khỏi phần tử con bên trong.
- **input** - Khi giá trị được nhập vào trường nhập liệu (`input`).
- **change** - Khi giá trị của trường nhập liệu (`input`) thay đổi và người dùng rời khỏi trường đó.
- **blur** - Khi phần tử không còn được chọn (mất tiêu điểm).
- **keydown** - Khi một phím được nhấn xuống.
- **keyup** - Khi một phím được nhả ra.
- **keypress** - Khi một phím được nhấn (hiện nay thường thay bằng `keydown` vì sự kiện này đã không còn được khuyến nghị sử dụng).
- **onload** - Khi trình duyệt đã tải xong một trang.

#### 8.2. Getting value from an input element

Ta sử dụng form để thu nhập thông tin nhập từ người dùng, để làm được điều đó hãy xem ví dụ sau đây

1. input value

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <h1>Body Mass Index Calculator</h1>

    <input type="text" id="mass" placeholder="Mass in Kilogram" />
    <input type="text" id="height" placeholder="Height in meters" />
    <button>Calculate BMI</button>

    <script>
      const mass = document.querySelector("#mass");
      const height = document.querySelector("#height");
      const button = document.querySelector("button");

      let bmi;
      button.addEventListener("click", () => {
        bmi = mass.value / height.value ** 2;
        alert(`your bmi is ${bmi.toFixed(2)}`);
        console.log(bmi);
      });
    </script>
  </body>
</html>
```

2. input / change / blur event

Bên cạnh việc lấy ra giá trị của ô nhập, ta có thể lắng nghe được sự kiện nhập của hay thay đổi của ô input. Hay là sự kiện blur khi ô input không còn được focus nữa

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <h1>Data Binding using input or change event</h1>

    <input type="text" placeholder="say something" />
    <p></p>

    <script>
      const input = document.querySelector("input");
      const p = document.querySelector("p");

      input.addEventListener("input", (e) => {
        p.textContent = e.target.value;
      });
    </script>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <h1>Giving feedback using blur event</h1>

    <input type="text" id="mass" placeholder="say something" />
    <p></p>

    <script>
      const input = document.querySelector("input");
      const p = document.querySelector("p");

      input.addEventListener("blur", (e) => {
        p.textContent = "Field is required";
        p.style.color = "red";
      });
    </script>
  </body>
</html>
```

3. keypress, keydown and keyup

Lắng nghe sự kiện gõ phím như thế nào?

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <h1>Key events: Press any key</h1>

    <script>
      document.body.addEventListener("keypress", (e) => {
        alert(e.keyCode);
      });
    </script>
  </body>
</html>
```
