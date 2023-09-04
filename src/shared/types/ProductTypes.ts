export type ProductSectionUnion = "new" | "popular";

export interface ProductCardType {
  id: string;
  /** Source image link of product card, example: "https://.../image.jpg" */
  img: string;
  /** Translated name of product (or map of translations to get name dynamically based on selected language) */
  name: string;
  /** Category of product (type of product) */
  type: string;
  /** Price of product */
  price: number;
  /** Rate of product (number from 0 to 5) */
  global_rating: number;
  /** Discount */
  discount: number;
}
