var weak = new WeakSet();
 
// Danh sách key 
var key1 = {
    name : "thehalfheart"
};
var key2 = {
    website: "freetuts.net"
};
 
// Thêm phần tử
weak.add(key1);
weak.add(key2);
 
// Kiểm tra tồn tại
var other_key = {};
console.log(weak.has(key1)); // true
console.log(weak.has(other_key)); // false
 
// Xóa phần tử
weak.delete(key1);