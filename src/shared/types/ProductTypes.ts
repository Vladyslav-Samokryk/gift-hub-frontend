export interface ProductCardType {
  id: string;
  /** Source image link of product card, example: "https://.../image.jpg" */
  img: string;
  /** Translated name of product (or map of translations to get name dynamically based on selected language) */
  name: string;
  /** Category of product (type of product) */
  category: string;
  /** Price of product */
  price: number;
  /** Rate of product (number from 0 to 5) */
  global_rating: number;
  /** Discount */
  discount: number;
  //  Count of a product in a store
  quantity: number;
}

export interface ProductCardDetailedType {
  id: string;
  /** Source image link of product card, example: "https://.../image.jpg" */
  img: string[] | string;
  /** Translated name of product (or map of translations to get name dynamically based on selected language) */
  name: string;
  /** Category of product (type of product) */
  category: string;
  /** Price of product */
  price: number;
  /** Rate of product (number from 0 to 5) */
  global_rating: number;
  /** Discount */
  discount: number;
  //  Count of a product in a basket
  quantity: number;
  // артикул (8значне), код товару
  code: string;

  // опис товару
  description: string;

  // кількість коментарів з певною кількістю зірочок
  rate_by_stars: {
    _5: number;
    _4: number;
    _3: number;
    _2: number;
    _1: number;
    _0: number;
  };

  // рейтинг за критеріями. середнє арифметичне з усіх коментарів по критеріям
  rate_by_criteria: {
    quality: number;
    photo_match: number;
    description_match: number;
    price: number;
  };
}
