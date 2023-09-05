export function getLeft (way, left) {
  return way ? left + 0.1 : left - 0.5;
}

export function getSize (way, size, left) {
  if (!way) return 21;

  if (left < 45 && size <= 27) {
    return size + 0.015;
  } else {
    return size - 0.03;
  }
}

export function getWay (left, way) {
  if (way && left >= 75) {
    return false;
  }
  if (!way && left <= 5) {
    return true;
  }
  return way;
}

export function getIndex (h, way) {
  if (!way) return 0;
  if (h < 22) return 10;
  if (h < 25) return 20;
  return 30;
}

export function getStyle (style) {
  return { left: `${style.left}vw`, height: `${style.size}vw`, width: `${style.size}vw`, zIndex: getIndex(style.size, style.way) };
}

export function getPresent (style) {
  const h = style.map(el => el.size);
  const i = Math.max(...h);
  return h.indexOf(i);
}
