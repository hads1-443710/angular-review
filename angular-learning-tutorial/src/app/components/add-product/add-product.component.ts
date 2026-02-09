import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'; // Import các module cần thiết cho Reactive Forms
import { Router } from '@angular/router'; // Để điều hướng sau khi thêm thành công
import { ProductService } from '../../services/product.service';

/**
 * Component thêm sản phẩm mới.
 * Sử dụng Reactive Forms để quản lý trạng thái form và validate dữ liệu.
 */
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Nhớ import ReactiveFormsModule
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  /**
   * FormGroup: Đại diện cho toàn bộ form.
   * FormControl: Đại diện cho từng trường input.
   * Validators: Các hàm kiểm tra dữ liệu (required, min, max, email...).
   */
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]), // Tên bắt buộc, tối thiểu 3 ký tự
    price: new FormControl(0, [Validators.required, Validators.min(1)]), // Giá bắt buộc, tối thiểu là 1
    description: new FormControl('', [Validators.required]),
    inStock: new FormControl(true) // Mặc định là còn hàng
  });

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  /**
   * Hàm xử lý khi submit form.
   */
  onSubmit(): void {
    if (this.productForm.valid) {
      // Lấy dữ liệu từ form
      const newProduct = {
        name: this.productForm.value.name!, // Dấu ! để khẳng định giá trị không null (do ta đã validate required)
        price: this.productForm.value.price!,
        description: this.productForm.value.description!,
        inStock: this.productForm.value.inStock!
      };

      // Gọi service để thêm sản phẩm
      this.productService.addProduct(newProduct);

      alert('Thêm sản phẩm thành công!');

      // Chuyển hướng về trang danh sách
      this.router.navigate(['/']);
    } else {
      // Nếu form không hợp lệ, đánh dấu tất cả các trường là đã touched để hiển thị lỗi
      this.productForm.markAllAsTouched();
    }
  }
}
