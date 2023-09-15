import type { Children } from "@src/shared";
import React from "react";

interface InputProps {
  children: Children;
  label: string;
}

export default function InputContainer ({ children, label }: InputProps): JSX.Element {
  return (
    <div className="relative flex items-center">
      {children}
      <label className="label">{label}</label>
    </div>
  );
}
