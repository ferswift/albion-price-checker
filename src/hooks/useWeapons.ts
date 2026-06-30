import { useState } from "react";
import type { WeaponType } from "../types/WeaponType";

export function useWeapons() {
  const [weapons, setWeapons] = useState<WeaponType[]>([]);

  return {
    weapons,
    setWeapons,
  };
}
