export interface Categories {
  id: string;
  url: string;
  name: string;
  icon: string;
  img: string;
  sub: [
    {
      id: string;
      url: string;
      name: string;
      icon: null;
      img: string;
      sub: [];
    },
  ];
}

export interface CatalogSub {
  visible: boolean;
  sub: Array<{
    name: string;
    url: string;
  }>;
  title: string;
}
