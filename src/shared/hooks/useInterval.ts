import React, { useState, useEffect, useRef } from "react";

// creating the custom useInterval hook
export function useInterval (callback: Function, delay: number): void {
  // Creating a ref
  const savedCallback = useRef<Function | null>(null);

  // To remember the latest callback .
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // combining the setInterval and
  // clearInterval methods based on delay.
  useEffect(() => {
    const tick = () => savedCallback.current?.();

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
