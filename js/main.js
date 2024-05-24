var bookUrl = document.getElementById("bookUrl");
var bookName = document.getElementById("bookName");
var books = [];

books = JSON.parse(localStorage.getItem("booksContainer"))
displayData();
function addBook() {
  var book = {
    bookUrl: bookUrl.value,
    bookName: bookName.value,
  };
  books.push(book);
  localStorage.setItem("booksContainer" ,JSON.stringify(books));
  clearForm();
  displayData();
}
function clearForm() {
  bookUrl.value = "";
  bookName.value = "";
}
function displayData() {
  var cartona = "";
  for (i = 0; i < books.length; i++) {
    cartona += `
    <tr>
    <td>${i + 1}</td>
    <td>${books[i].bookName}</td>
    <td>
      <button onclick="visiteMe('${
        books[i].bookUrl
      }')"  class="btn  btn-outline-primary py-3 px-4 m-2">
        <i class="fa-solid fa-eye pe-2"></i> visit
      </button>
    </td>
    <td>
      <button onclick="deleteMe(${i});show1()" class="btn  btn-outline-dark py-3 px-4 m-2" ><i class="fa-solid fa-trash-can"></i> delete</button>
    </td>
  </tr>
    `;
  }
  document.getElementById("tBody").innerHTML = cartona;
}
function deleteMe(index) {
  books.splice(index, 1);
  localStorage.setItem("booksContainer" ,JSON.stringify(books));

  displayData();
}
function visiteMe(bookUrl) {
  console.log(bookUrl);
  window.open(bookUrl, "_blank");
}
function show() {
  var alert = document.getElementById("container");
  alert.style.display = "block";
}
function hide() {
  var alert = document.getElementById("container");
  alert.style.display = "none";
}
function show1() {
  var alert = document.getElementById("container1");
  alert.style.display = "block";
}
function hide1() {
  var alert = document.getElementById("container1");
  alert.style.display = "none";
}
function nameValidation(){

}

