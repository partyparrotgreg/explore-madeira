"use client";

import { useTheme } from "next-themes";

export const useIsDark = () => {
  const { theme } = useTheme();
  return theme === "dark";
};
