import { regions } from "@/lib/regions";
import { useMemo } from "react";

export const useRegions = () => {
  return useMemo(() => {
    return regions.sort((a, b) => a.order - b.order);
  }, []);
};
