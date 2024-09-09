export interface Manager {
  id: string;
  name: string;
  email: string;
  orders: number;
  online: boolean;
}

export interface AddManagerValue {
  name: string;
  email: string;
  login: string;
  password: string;
}

export interface Reviews {
  id: string;
  date: Date;
  user_name: string;
  review: string;
  product_id: string;
}
