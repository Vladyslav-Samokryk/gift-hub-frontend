export type DirectionUnionType = "back" | "forward";

export interface StylePropType {
  // Left style parameter
  left: number;
  // Width and height style parameter
  size: number;
  // Moving direction
  direction: DirectionUnionType;
}
