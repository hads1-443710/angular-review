import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router'; // Import ActivatedRoute để lấy tham số từ URL
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

/**
 * Component hiển thị chi tiết sản phẩm.
 * Sử dụng ActivatedRoute để lấy ID sản phẩm từ URL (ví dụ: /product/1).
 */
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink], // RouterLink để tạo link quay lại
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute, // Service cung cấp thông tin về route hiện tại
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Đăng ký nhận thay đổi của tham số trên URL
    // paramMap là một Observable chứa map các tham số
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); // Lấy tham số 'id' và chuyển sang kiểu số
      if (id) {
        this.product = this.productService.getProductById(id);
      }
    });
  }
}
