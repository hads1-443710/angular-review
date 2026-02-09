import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';

/**
 * Cấu hình Routing cho ứng dụng.
 * Routes là mảng các object định nghĩa đường dẫn URL và Component tương ứng.
 */
export const routes: Routes = [
  // Đường dẫn gốc (Home Page)
  { path: '', component: ProductListComponent, title: 'Trang chủ - Danh sách sản phẩm' },

  // Đường dẫn chi tiết sản phẩm với tham số động :id
  { path: 'product/:id', component: ProductDetailComponent, title: 'Chi tiết sản phẩm' },

  // Đường dẫn thêm sản phẩm mới
  { path: 'add-product', component: AddProductComponent, title: 'Thêm sản phẩm' },

  // Wildcard Route (**): Bắt tất cả các đường dẫn không hợp lệ -> Chuyển hướng về trang chủ
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
