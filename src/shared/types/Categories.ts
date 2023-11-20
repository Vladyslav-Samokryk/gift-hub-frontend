export interface CategorySub {
  id: string;
  url: string;
  name: string;
  icon: null;
  img: string;
  sub: [];
}

export interface Categories {
  id: string;
  url: string;
  name: string;
  icon: string;
  img: string;
  sub: CategorySub[];
}
