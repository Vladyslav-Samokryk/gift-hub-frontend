import type { ProductCardType } from "@src/shared";

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
    count: 1,
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
    count: 1,
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
    count: 1,
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
