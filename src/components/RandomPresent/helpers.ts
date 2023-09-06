import type { StylePropType, DirectionUnionType } from "@src/shared";
interface StyleType {
  left: string;
  height: string;
  width: string;
  zIndex: number;
}

export function getLeft ({ left, direction }: StylePropType): number {
  switch (direction) {
    case "back":
      return left - 0.5;
    case "forward":
      return left + 0.1;
  }
}

export function getSize ({ left, size, direction }: StylePropType): number {
  if (direction === "back") return 21;

  if (left < 45 && size <= 27) {
    return size + 0.015;
  } else {
    return size - 0.03;
  }
}

export function getDirection ({ left, direction }: StylePropType): DirectionUnionType {
  if (direction === "forward" && left >= 75) {
    return "back";
  }
  if (direction === "back" && left <= 5) {
    return "forward";
  }
  return direction;
}

export function getIndex (size: number, direction: DirectionUnionType): number {
  if (direction === "back") return 0;
  if (size <= 23) return 10;
  if (size <= 25) return 20;
  return 30;
}

export function getStyle ({ left, size, direction }: StylePropType): StyleType {
  return {
    left: `${left}vw`,
    height: `${size}vw`,
    width: `${size}vw`,
    zIndex: getIndex(size, direction),
  };
}

export function getPresent (style: StylePropType[]): number {
  const h = style.map(el => el.size);
  const i = Math.max(...h);
  return h.indexOf(i);
}
