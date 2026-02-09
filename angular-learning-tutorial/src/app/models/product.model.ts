/**
 * Interface Product mô tả cấu trúc dữ liệu của một sản phẩm.
 * Trong TypeScript, Interface giúp định nghĩa kiểu dữ liệu (Type Checking).
 *
 * Các trường của sản phẩm:
 * - id: Định danh duy nhất.
 * - name: Tên sản phẩm.
 * - price: Giá cả.
 * - description: Mô tả chi tiết.
 * - inStock: Trạng thái còn hàng hay hết hàng (boolean).
 */
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
}
