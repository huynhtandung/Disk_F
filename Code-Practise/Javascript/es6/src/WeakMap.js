// Khởi tạo
var weak = new WeakMap();
 
// Danh sách key 
var key1 = {};
var key2 = {};
 
// Thêm phần tử
weak.set(key1, "Giá trị 01");
weak.set(key2, "Giá trị 02");
 
// Lấy giá trị
console.log(weak.get(key1)); // Giá trị 01
console.log(weak.get(key2)); // Giá trị 02
 
// Kiểm tra tồn tại
var other_key = {};
console.log(weak.has(key1)); // true
console.log(weak.has(other_key)); // false
 
// Xóa phần tử
weak.delete(key1);
console.log(weak.get(key1)); // Undefined