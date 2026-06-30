import { SearchForm } from "../components/SearchForm";
import { useSearch } from "../hooks/useSearch";
import { useWeapons } from "../hooks/useWeapons";
import { itemPriceCheck } from "../services/AlbionService";

export const Dashboard = () => {
  const { search, setSearch } = useSearch();
  const { weapons, setWeapons } = useWeapons();

  async function handleSearch() {
    try {
      const data = await itemPriceCheck(search);

      setWeapons(data);
    } catch (error) {
      console.error("Error fecthing weapon", error);
      throw error;
    }
  }

  return (
    <div>
      <SearchForm value={search} onChange={setSearch} onSearch={handleSearch} />
    </div>
  );
};
