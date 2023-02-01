import { useContext } from 'react';
import { ItemsContext } from '../../Context/ItemsContext.js';
import { toggleListItem } from '../../services/items.js';

export default function ItemsList() {
  const { items, setItems } = useContext(ItemsContext);
  const handleChange = async (item) => {
    try {
      const updateItem = await toggleListItem(item);
      setItems((prevItems) =>
        prevItems.map((prevItem) => (prevItem.id === item.id ? updateItem : prevItem))
      );
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <label>
            <input type="checkbox" checked={item.purchased} onChange={() => handleChange(item)} />
            {item.name}
          </label>
        </div>
      ))}
    </>
  );
}
