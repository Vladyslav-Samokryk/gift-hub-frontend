import { DIRECTION } from "shared/constants/direction";
import { SCREEN } from "shared/constants/screens";
import type { StylePropType } from "shared/types/Styles";

interface StyleType {
  left: string;
  height: string;
  width: string;
  zIndex: number;
}

export function getRandomNumber(): number {
  return Math.floor(2000 + Math.random() * 7999);
}

export function getLeft({ left, direction }: StylePropType): number {
  switch (direction) {
    case DIRECTION.BACK:
      return left - 0.5;
    case DIRECTION.FORWARD:
      return left + 0.1;
  }
  return left;
}

export function getSize({ left, size, direction }: StylePropType): number {
  if (direction === DIRECTION.BACK) return 21;

  if (left < 45 && size <= 27) {
    return size + 0.015;
  } else {
    return size - 0.03;
  }
}

export function getDirection({ left, direction }: StylePropType): string {
  if (direction === DIRECTION.FORWARD && left >= 65) {
    return DIRECTION.BACK;
  }
  if (direction === DIRECTION.BACK && left <= -5) {
    return DIRECTION.FORWARD;
  }
  return direction;
}

export function getIndex(size: number, direction: string): number {
  if (direction === DIRECTION.BACK) return 0;
  if (size <= 23) return 10;
  if (size <= 25) return 20;
  return 30;
}

export function getStyle(
  { left, size, direction }: StylePropType,
  windowWidth: number,
): StyleType {
  let times = 1;
  let offset = 0;
  let width = 1;

  if (windowWidth <= SCREEN.MD) {
    times = 2;
    offset = 30;
    width = 0.7;
  } else {
    times = 1;
    offset = 0;
    width = 1;
  }

  return {
    left: `${left / width - offset}vw`,
    height: `${size * times}vw`,
    width: `${size * times}vw`,
    zIndex: getIndex(size, direction),
  };
}

export function getPresent(style: StylePropType[]): number {
  const h = style.map((el) => el.size);
  const i = Math.max(...h);
  return h.indexOf(i);
}
