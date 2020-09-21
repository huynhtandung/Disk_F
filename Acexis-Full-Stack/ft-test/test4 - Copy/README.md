## Mục tiêu của bài test

1. Nắm được cách vận hành của multipart/form-data, stream, buffer
2. Sử dụng multer để handle các request là multipart/form-data
3. Filter được một số điều kiện file upload như file size, extension,...
4. Nắm được khái niệm về File Signature (magic code)
5. Người làm bài test nắm được kỹ thuật tấn công phổ biến như Directory Traversal Attack

## Mô tả

Bạn sẽ phải xây dựng một ứng dụng cho phép người dùng upload file sử dụng route **/file/upload**, lúc up ảnh qua form với multipart/form-data thì form name là **file**

Lưu ý:
- **Môi trường test là môi trường linux, các bạn lưu ý lưu file thì lưu dưới thư mục /tmp. Ví dụ: file A(id là 6b7a7e4e7195) khi lưu sẽ là /tmp/6b7a7e4e7195**
- Tập tin upload chỉ có kích thước tối đa là 30 KiB (Kibibyte - IEC)
- Tập tin upload chỉ có thể là file có định dạng .png
- Khi người dùng tải về thành công trả về status code 200
- Khi người dùng upload file thành công trả về status code 201
### Case 1: Kiểm tra hoạt động của ứng dụng

1. Ứng dụng hoạt động

### Case 2: Người dùng có thể gửi tin nhắn đúng theo các yêu cầu dưới đây

1. Người dùng có thể upload một file có kích thước nhỏ hơn 30 KiB đến server thông qua path **/file/upload** và nhận status code là 201 và response object (bắt buộc), response có nội dung như sau:
```
{
  id: string,
  originalname: string,
  size: number
  }
```
với originalname là tên của file người dùng upload, id là tên file lưu trên server, size là kích thước của file tính theo đơn vị byte.

2. Người dùng có thể download file vừa upload khi gửi yêu cầu tới route sau **file/download?id={fileID}**.
3. Người dùng không thể update một file có extension là  **.png** có kích thước lớn hơn **30 KiB**.
4. Người dùng không thể update một bash file có extension là **.sh**. Yêu cầu trả về status code là 415
5. Khi dùng cũng không thể update 1 file dù đã đổi file bash (.sh) ở bước 4 từ **.sh** thành **.png**. Yên cầu trả về status code là 415
6. Người dùng không thể thực hiện tấn công Path Traversal. Yêu cầu trả về status code 400

<p align="center">
  <img src="./at/demo1.png" width="100%" alt="success example">
</p>
