import type { WeaponType } from "../types/WeaponType";

interface WeaponsTableProps {
  weapons: WeaponType[];
}

export const WeaponsTable = ({ weapons }: WeaponsTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Cidade</th>
          <th>Qualidade</th>
          <th>Preço</th>
        </tr>
      </thead>

      <tbody>
        {weapons.map((weapon) => (
          <tr key={`${weapon.item_id}-${weapon.city}-${weapon.quality}`}>
            <td>{weapon.item_id}</td>
            <td>{weapon.city}</td>
            <td>{weapon.quality}</td>
            <td>{weapon.sell_price_min}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
