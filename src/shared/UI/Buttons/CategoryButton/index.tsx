import { RightArrow } from "@src/shared";
import React from "react";

interface CategoryButtonProp {
  icon: JSX.Element;
  title: string;
  onClick?: () => void;
}

export default function CategoryButton ({ icon, title, onClick }: CategoryButtonProp): JSX.Element {
  return (
    <button onClick={onClick} className="flex">
      {icon}
      <p>{title}</p>
      <RightArrow />
    </button>
  );
}
