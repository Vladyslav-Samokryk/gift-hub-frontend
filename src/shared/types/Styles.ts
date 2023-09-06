export type DirectionUnionType = "back" | "forward";

export interface StylePropType {
  // Left stype parametr
  left: number;
  // Width and height stype parametr
  size: number;
  // Mooving direction
  direction: DirectionUnionType;
}
