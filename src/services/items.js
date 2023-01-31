import { checkError, client } from './client.js';

export async function getListItems() {
  const response = await client.from('react_to_dos').select();

  return checkError(response);
}

export async function addListItem(name, qty) {
  const response = await client.from('react_to_dos').insert([{ name, qty }]).single();

  return checkError(response);
}

export async function toggleListItem({ id, purchased }) {
  const response = await client
    .from('react_to_dos')
    .update({ purchased: !purchased })
    .match({ id })
    .single();

  return checkError(response);
}
