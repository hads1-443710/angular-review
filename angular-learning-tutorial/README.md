# Angular Learning Tutorial - Dự án Học Nhanh Angular

Chào mừng bạn đến với dự án hướng dẫn học Angular! Dự án này được thiết kế để giúp bạn nắm bắt các khái niệm cốt lõi của Angular một cách nhanh chóng thông qua việc xây dựng một ứng dụng "Quản lý sản phẩm" đơn giản.

Mỗi file mã nguồn trong dự án này đều đi kèm với **comment chi tiết bằng tiếng Việt**, giải thích *tại sao* và *làm thế nào* mã hoạt động.

## 🚀 Tính năng của dự án

Ứng dụng bao gồm các tính năng cơ bản:
1.  **Xem danh sách sản phẩm**: Hiển thị danh sách, trạng thái còn hàng/hết hàng.
2.  **Xem chi tiết sản phẩm**: Điều hướng đến trang chi tiết của từng sản phẩm.
3.  **Thêm sản phẩm mới**: Sử dụng Form để nhập liệu và validate dữ liệu.

## 📚 Các khái niệm được đề cập

Dự án này bao gồm các chủ đề quan trọng:

*   **Components (Thành phần)**: Cấu trúc cơ bản của UI (`standalone components`).
*   **Templates & Data Binding**:
    *   Interpolation `{{ value }}`
    *   Property Binding `[property]="value"`
    *   Event Binding `(event)="handler()"`
*   **Directives (Chỉ thị)**:
    *   `*ngFor`: Vòng lặp.
    *   `*ngIf`: Điều kiện hiển thị.
*   **Input & Output**: Giao tiếp giữa component cha và con.
*   **Services & Dependency Injection**: Quản lý dữ liệu và chia sẻ logic (`BehaviorSubject`, `Observable`).
*   **Routing (Định tuyến)**: Điều hướng giữa các trang (`Router`, `ActivatedRoute`, `RouterLink`).
*   **Reactive Forms**: Quản lý form nhập liệu và validation (`FormGroup`, `FormControl`, `Validators`).

## 🛠️ Cài đặt và Chạy dự án

### Yêu cầu
*   Node.js (phiên bản 18 trở lên).
*   NPM (đã đi kèm với Node.js).

### Các bước thực hiện

1.  **Cài đặt dependencies**:
    Mở terminal tại thư mục gốc của dự án và chạy:
    ```bash
    npm install
    ```

2.  **Chạy ứng dụng**:
    ```bash
    npm start
    ```
    hoặc
    ```bash
    ng serve
    ```

3.  **Truy cập**:
    Mở trình duyệt và truy cập: `http://localhost:4200/`

## 📂 Cấu trúc thư mục

*   `src/app/models/`: Chứa các interface định nghĩa kiểu dữ liệu (ví dụ: `Product`).
*   `src/app/services/`: Chứa các service quản lý logic và dữ liệu (`ProductService`).
*   `src/app/components/`: Chứa các component giao diện:
    *   `product-list`: Trang danh sách sản phẩm.
    *   `product-item`: Component con hiển thị từng sản phẩm.
    *   `product-detail`: Trang chi tiết sản phẩm.
    *   `add-product`: Trang thêm sản phẩm mới.
*   `src/app/app.routes.ts`: Cấu hình định tuyến (Routing).

## 💡 Cách học hiệu quả

1.  **Đọc code**: Hãy bắt đầu từ `src/app/app.routes.ts` để hiểu luồng đi của ứng dụng.
2.  **Đọc comment**: Mở từng file component (`.ts` và `.html`) và đọc kỹ các comment giải thích.
3.  **Thử nghiệm**: Thử thay đổi logic, ví dụ:
    *   Thêm trường "Số lượng" vào `Product`.
    *   Thêm validation cho form (ví dụ: giá max là 10000).
    *   Thay đổi giao diện CSS.

Chúc bạn học tốt!
