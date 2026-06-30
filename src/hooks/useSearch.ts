import { useState } from "react";

export function useSearch() {
  const [search, setSearch] = useState("T4_MAIN_SWORD");

  return {
    search,
    setSearch,
  };
}
