const arraySubcategories = [
  ["Keyboards", "Headphones", "Powerbanks", "Lamps", "Massagers"],
  ["Mugs", "Termomugs", "Lunchboxes", "Bottles"],
  ["Candies", "SecretCookies", "Tea", "Coffee", "Cocktails"],
  ["Books", "Courses"],
  ["Socks", "Tshirts", "Hoodies", "Plaids", "Slippers"],
  ["Backpack", "LaptopBackpack", "PhoneCase", "Shopper", "Keychain"],
  ["Notebooks", "Datebook", "MagBoard", "Pens"],
];

export function getSubImg (categoryIndex: number, index: number): string {
  return `src/shared/assets/webp/${arraySubcategories[categoryIndex][index]}.webp`;
}
