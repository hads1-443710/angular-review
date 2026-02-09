import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

/**
 * @Injectable({ providedIn: 'root' })
 * Decorator này đánh dấu class là một Service và có thể được Inject (tiêm) vào các component khác.
 * 'root' nghĩa là service này là Singleton (chỉ có 1 instance duy nhất trong toàn bộ ứng dụng),
 * giúp chia sẻ dữ liệu dễ dàng giữa các component.
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /**
   * Dữ liệu giả lập ban đầu (Mock Data).
   * Trong thực tế, dữ liệu này thường được lấy từ API (backend).
   */
  private initialProducts: Product[] = [
    {
      id: 1,
      name: 'Laptop Gaming ROG',
      price: 1500,
      description: 'Laptop cấu hình khủng cho game thủ chuyên nghiệp.',
      inStock: true
    },
    {
      id: 2,
      name: 'Chuột Không Dây Logitech',
      price: 25,
      description: 'Chuột văn phòng tiện lợi, pin trâu.',
      inStock: false
    },
    {
      id: 3,
      name: 'Bàn Phím Cơ Keychron',
      price: 85,
      description: 'Bàn phím cơ switch nâu, cảm giác gõ êm ái.',
      inStock: true
    },
    {
      id: 4,
      name: 'Màn Hình Dell UltraSharp',
      price: 350,
      description: 'Màn hình độ phân giải 4K sắc nét cho đồ họa.',
      inStock: true
    }
  ];

  /**
   * BehaviorSubject là một loại Observable đặc biệt trong RxJS.
   * Nó lưu trữ giá trị hiện tại và phát ra giá trị đó cho bất kỳ ai đăng ký (subscribe) ngay lập tức.
   * Đây là cách quản lý State đơn giản nhưng hiệu quả trong Angular mà không cần dùng Redux/NgRx cho app nhỏ.
   */
  private productsSubject = new BehaviorSubject<Product[]>(this.initialProducts);

  /**
   * Observable công khai để các component có thể subscribe và nhận dữ liệu mới nhất.
   * Dấu $ ở cuối tên biến là quy ước đặt tên cho Observable.
   */
  products$: Observable<Product[]> = this.productsSubject.asObservable();

  constructor() { }

  /**
   * Lấy danh sách sản phẩm dưới dạng Observable.
   * Component sẽ subscribe vào hàm này để tự động cập nhật UI khi dữ liệu thay đổi.
   */
  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  /**
   * Lấy chi tiết một sản phẩm theo ID.
   * Lưu ý: Trong thực tế, hàm này thường sẽ gọi API để lấy chi tiết.
   * Ở đây ta tìm kiếm trực tiếp trong mảng dữ liệu hiện tại.
   * @param id ID của sản phẩm cần tìm.
   */
  getProductById(id: number): Product | undefined {
    return this.productsSubject.value.find(p => p.id === id);
  }

  /**
   * Thêm một sản phẩm mới vào danh sách.
   * @param product Sản phẩm cần thêm (chưa có ID).
   */
  addProduct(product: Omit<Product, 'id'>): void {
    const currentProducts = this.productsSubject.value; // Lấy giá trị hiện tại của danh sách

    // Tạo ID mới (giả lập auto-increment)
    const newId = currentProducts.length > 0
      ? Math.max(...currentProducts.map(p => p.id)) + 1
      : 1;

    // Tạo đối tượng sản phẩm mới hoàn chỉnh
    const newProduct: Product = { ...product, id: newId };

    // Cập nhật danh sách mới (Spread operator ... để tạo mảng mới - tính bất biến/immutability)
    const updatedProducts = [...currentProducts, newProduct];

    // Phát ra giá trị mới cho tất cả các subscriber (component đang lắng nghe)
    this.productsSubject.next(updatedProducts);
  }
}
