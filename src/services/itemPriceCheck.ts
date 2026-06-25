import { API_URL } from "../config/api";
import type { WeaponsTypes } from "../types/WeaponsTypes";

export async function itemPriceCheck(itemId: string): Promise<WeaponsTypes[]> {
  try {
    const response = await fetch(`${API_URL}/stats/prices/${itemId}`);

    if (!response.ok) {
      throw new Error("Error fetching prices");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("error fetching items", error);

    throw error;
  }
}
