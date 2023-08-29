export interface Product {
  /** Source image link of product card, example: "https://.../image.jpg" */
  img: string;
  /** Translated name of product (or map of translations to get name dynamically based on selected language) */
  name: string;
  /** Category of product (type of product) */
  type: string;
  /** Price of product */
  cost: number;
  /** Rate of product (number from 0 to 5) */
  rate: number;
}
