import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';

/**
 * Component con (Child Component) để hiển thị chi tiết 1 sản phẩm.
 * Sử dụng @Input và @Output để giao tiếp với component cha (ProductListComponent).
 */
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  /**
   * @Input(): Nhận dữ liệu từ component cha.
   * Component cha sẽ truyền dữ liệu vào thông qua Property Binding [product]="..."
   * ! nghĩa là biến này sẽ chắc chắn có giá trị (Non-null assertion).
   */
  @Input() product!: Product;

  /**
   * @Output(): Phát ra sự kiện (Event) để component cha lắng nghe.
   * Component cha sẽ lắng nghe thông qua Event Binding (addToCart)="..."
   * EventEmitter<Product>: Sự kiện này sẽ mang theo dữ liệu là đối tượng Product.
   */
  @Output() addToCart = new EventEmitter<Product>();

  /**
   * Hàm này được gọi khi người dùng click vào nút "Thêm vào giỏ".
   * Nó sẽ phát ra sự kiện addToCart kèm theo sản phẩm hiện tại.
   */
  onAddToCart(): void {
    console.log('ProductItemComponent: Emit event addToCart');
    this.addToCart.emit(this.product);
  }
}
