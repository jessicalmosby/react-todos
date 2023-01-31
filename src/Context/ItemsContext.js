import { useEffect, useState, createContext } from 'react';
import { getListItems } from '../services/items.js';

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getListItems();
        setItems(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchItems();
  }, []);
  return <ItemsContext.Provider value={{ items, setItems }}>{children}</ItemsContext.Provider>;
};

export { ItemsContext, ItemsProvider };
