import { useContext } from 'react';
import { ItemsContext } from '../../Context/ItemsContext.js';
import { toggleListItem } from '../../services/items.js';
import Items from './Items.js';

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
      {Items.map((item) => (
        <div key={item.id}>
          <label>
            <input type="checkbox" checked={item.purchased} onChange={() => handleChange(item)} />
            {item.qty} {item.name}
          </label>
        </div>
      ))}
    </>
  );
}
