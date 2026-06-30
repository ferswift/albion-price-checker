import { SearchInput } from "./SearchInput";

interface SearchFormProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export const SearchForm = ({ value, onChange, onSearch }: SearchFormProps) => {
  return (
    <div>
      <SearchInput value={value} onChange={onChange} />

      <button onClick={onSearch}>Search</button>
    </div>
  );
};
