// Tạo một đối tượng book với các thuộc tính:

// title: "JavaScript Basics"
// author: "John Smith"
// page: 200
// Yêu cầu:

// Xóa thuộc tính page khỏi đối tượng.
// In ra đối tượng sau khi đã xóa.

let book={
    title: `JavaScript Basics`,
    author: `John Smith`,
    page: 200,
};
// Xoa thuoc tin `page`
delete book.page;
console.log(book);
