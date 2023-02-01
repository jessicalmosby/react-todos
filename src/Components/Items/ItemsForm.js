import { useContext, useState } from 'react';
import { ItemsContext } from '../../Context/ItemsContext.js';
import { addListItem } from '../../services/items.js';

export default function ItemForm() {
  const [name, setName] = useState('');
  const { setItems } = useContext(ItemsContext);
  const handleNewItem = async () => {
    try {
      const item = await addListItem(name);
      setItems((prev) => [...prev, item]);
      setName('');
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <form onSubmit={handleNewItem}>
      <input
        type="text"
        placeholder="new item"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Add to list</button>
    </form>
  );
}
