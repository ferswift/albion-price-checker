interface InputType {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: InputType) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar equipamento"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
