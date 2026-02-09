import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule để sử dụng *ngFor, *ngIf
import { RouterLink } from '@angular/router';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

/**
 * @Component: Decorator này đánh dấu class là một Component.
 * - selector: Tên tag HTML để sử dụng component này (ví dụ: <app-product-list></app-product-list>).
 * - standalone: true -> Đây là Component độc lập (không cần khai báo trong NgModule), tính năng mới từ Angular 14+.
 * - imports: Danh sách các module/component con cần thiết cho component này.
 * - templateUrl: Đường dẫn đến file HTML (template).
 * - styleUrls: Đường dẫn đến file CSS (style).
 */
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // products$: Observable chứa danh sách sản phẩm.
  // Dấu $ là quy ước đặt tên cho biến là Observable.
  // Sử dụng Observable giúp UI tự động cập nhật khi data thay đổi (Reactive).
  products$: Observable<Product[]>;

  /**
   * Constructor: Hàm khởi tạo của class.
   * Đây là nơi thực hiện Dependency Injection (DI).
   * @param productService Angular sẽ tự động tiêm (inject) instance của ProductService vào đây.
   */
  constructor(private productService: ProductService) {
    // Khởi tạo biến products$ bằng observable từ service.
    // Lưu ý: Không nên thực hiện logic phức tạp trong constructor.
    this.products$ = this.productService.getProducts();
  }

  /**
   * ngOnInit: Một Lifecycle Hook (Vòng đời component).
   * Hàm này chạy ngay sau khi component được khởi tạo xong (sau constructor).
   * Đây là nơi tốt nhất để gọi API hoặc khởi tạo dữ liệu ban đầu.
   */
  ngOnInit(): void {
    // Trong ví dụ này, việc gán products$ đã làm ở constructor,
    // nhưng thông thường ta sẽ gọi các hàm fetch data ở đây.
    console.log('ProductListComponent đã được khởi tạo!');
  }

  /**
   * Hàm xử lý sự kiện khi người dùng click vào nút "Mua ngay".
   * @param product Sản phẩm được chọn.
   */
  onBuy(product: Product): void {
    alert(`Bạn đã chọn mua sản phẩm: ${product.name} với giá $${product.price}`);
  }
}
