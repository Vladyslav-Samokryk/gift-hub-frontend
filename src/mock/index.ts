import type { Manager, Reviews } from "shared/types/Admin";
import type { ProductCardType } from "shared/types/ProductTypes";

export const productCardMock: ProductCardType[] = [
  {
    id: "1",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
    name: "Paper name",
    category: "Paper type",
    price: 500,
    global_rating: 3,
    discount: 0,
    quantity: 1,
    isInCart: false,
    isInWishlist: false,
  },
  {
    id: "12",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
    name: "Paper name",
    category: "Paper type",
    price: 500,
    global_rating: 3,
    discount: 0,
    quantity: 1,
    isInCart: false,
    isInWishlist: false,
  },
  {
    id: "123",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
    name: "Paper name",
    category: "Paper type",
    price: 500,
    discount: 0.5,
    global_rating: 3,
    quantity: 1,
    isInCart: false,
    isInWishlist: false,
  },
];

export const rateCriteria = {
  quality: 10,
  photo_match: 50,
  description_match: 60,
  price: 100,
};

export const rateStars = {
  _0: 1,
  _1: 1,
  _2: 1,
  _3: 1,
  _4: 1,
  _5: 1,
};

export const comments = [
  {
    author: "123241",
    date: "12 іересня 2023",
    global_rate: 5,
    text: "string",
    rate_by_criteria: {
      quality: 10,
      photo_match: 100,
      description_match: 16,
      price: 60,
    },
  },
  {
    author: "123241",
    date: "12 іересня 2023",
    global_rate: 5,
    text: "string",
    rate_by_criteria: {
      quality: 10,
      photo_match: 100,
      description_match: 16,
      price: 60,
    },
  },
  {
    author: "123241",
    date: "12 іересня 2023",
    global_rate: 5,
    text: "string",
    rate_by_criteria: {
      quality: 10,
      photo_match: 100,
      description_match: 16,
      price: 60,
    },
  },
];

export const managers: Manager[] = [
  {
    id: "1",
    name: "Ivan Vasnilenko",
    email: "ivan.vasnilenko@gmail.com",
    orders: 4,
    online: true,
  },
  {
    id: "2",
    name: "Liza Kotlar",
    email: "l_kot@outlook.com",
    orders: 100,
    online: false,
  },
  {
    id: "3",
    name: "Nik Daniels",
    email: "nkdjo2@ukr.net",
    orders: 1,
    online: true,
  },
];

export const reviews: Reviews[] = [
  {
    id: "1",
    date: new Date(10, 10, 2024),
    user_name: "Nik Daniels",
    review: "this is super",
    product_id: "q",
  },
  {
    id: "12",
    date: new Date(6, 10, 2024),
    user_name: "Nikolas Daniels",
    review:
      "this is not super this is not superthis is not superthis is not superthis is not superthis is not superthis is not superthis is not super this is not superthis is not superthis is not superthis is not superthis is not super",

    product_id: "q",
  },
  {
    id: "13",
    date: new Date(10, 1, 2024),
    user_name: "Nik Daniels",
    review:
      " this is superthis is superthis is superthis is superthis is superthis is superthis is super",

    product_id: "q",
  },
  {
    id: "121",
    date: new Date(10, 10, 2022),
    user_name: "Nik Daniels",
    product_id: "q",
    review: "this is no super",
  },
];
